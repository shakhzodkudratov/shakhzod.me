{
  inputs = {
    utils.url = "github:numtide/flake-utils/v1.0.0";
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0";
  };

  outputs = {
    self,
    nixpkgs,
    utils,
  }:
    utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
          ];
        };

        packages = {
          default = pkgs.buildNpmPackage rec {
            pname = "quartz";
            version = "4.5.2";

            src = pkgs.applyPatches {
              src = pkgs.fetchFromGitHub {
                owner = "jackyzha0";
                repo = "quartz";
                rev = "v${version}";
                hash = "sha256-A6ePeNmcsbtKVnm7hVFOyjyc7gRYvXuG0XXQ6fvTLEw=";
              };
              patches = [./patches/config.patch];
            };

            dontNpmBuild = true;
            makeCacheWritable = true;
            npmDepsHash = "sha256-xxK9qy04m1olekOJIyYJHfdkYFzpjsgcfyFPuKsHpKE=";

            installPhase = ''
              runHook preInstall
              npmInstallHook

              cd $out/lib/node_modules/@jackyzha0/quartz

              # Copy our website content
              rm -r ./content
              mkdir content
              cp -r ${./content}/* ./content

              rm -r ./quartz/static
              mkdir ./quartz/static
              cp -r ${./static}/* ./quartz/static

              $out/bin/quartz build
              mv public/ $out/public/

              runHook postInstall
            '';
          };
        };
      }
    );
}
