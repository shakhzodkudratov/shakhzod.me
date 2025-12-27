{
  inputs.nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0";

  outputs =
    { self, ... }@inputs:
    let
      supportedSystems = [
        "x86_64-linux" # 64-bit Intel/AMD Linux
        "aarch64-linux" # 64-bit ARM Linux
        "aarch64-darwin" # 64-bit ARM macOS
      ];

      forEachSupportedSystem =
        f:
        inputs.nixpkgs.lib.genAttrs supportedSystems (
          system:
          f {
            inherit system;
            pkgs = import inputs.nixpkgs {
              inherit system;
              config.allowUnfree = true;
            };
          }
        );
    in
    {
      devShells = forEachSupportedSystem (
        { pkgs, system }:
        {
          default = pkgs.mkShellNoCC {
            packages = with pkgs; [
              self.formatter.${system}
              nodejs
            ];
          };
        }
      );

      packages = forEachSupportedSystem (
        { pkgs, ... }:
        {
          default = pkgs.buildNpmPackage {
            name = "shakhzod-me-website";
            # required for lastModified plugin to work
            src = pkgs.lib.cleanSourceWith {
              src = ./.;
              filter =
                path: type:
                let
                  baseName = baseNameOf (toString path);
                in
                baseName == ".git" || (pkgs.lib.cleanSourceFilter path type);
            };
            npmDepsHash = "sha256-PYBK+ChqDylHMw4gz17CaYyKI/cMXnY0GcP51Vwrk7s=";
            # required for lastModified plugin to work
            nativeBuildInputs = [
              pkgs.git
            ];
            installPhase = ''
              mkdir -p $out
              cp -rf out/* $out
            '';
          };
        }
      );

      formatter = forEachSupportedSystem ({ pkgs, ... }: pkgs.nixfmt-rfc-style);
    };
}
