---
title: Nix va NixOS bu nima?
---

Nix va NixOS ni tushunish uchun keling avval Nix dan boshlaymiz.

Nix - bu operatsion tizimimizga turli-xil dastur o'rnatishga yordamlashuvchi dasturdir. U bir necha qismlardan tashkil topgan: Nix - dasturlash tili, nixpkgs - o'rnatiladigan dasturlar manbaai, Flakes - dasturni qanday o'rnatish jarayonini tasvirlovchi loyiha.

Ana endi keling har bir qismni alohida o'rganamiz. Tassovur qiling, sizda Google Chrome dasturini o'rnatish kerak. Bu ishni qanday qilasiz? Windows va MacOS operatsion tizim foydalanuvchilari aytishadi: "Google Chrome veb-sahifasidan dasturni yuklab olamiz va sichqonchani chap tugmasini ikki marotaba bosib dasturni o'rnatamiz". Linux foydalanuvchilarini javobi esa biroz murakkabroq: "Agar Ubuntu ishlatsak: dasturning veb-sahifasiga kirib yuklaymiz va terminalda yuklab olgan faylni `sudo dpkg -i google-chrome.deb` komandasi tergan holda o'rnatamiz. Agar Arch Linux ishlatsak: Google Chrome dasturi umumiy repozitoriyada yo'q, shuning uchun AUR dan quyidagicha o'rnatamiz: `yay -S google-chrome`".

E'tibor bergan bo'lsangiz bitta-yu bitta Google Chrome dasturini o'rnatish uslubi shunday farqli. E-IMZO dasturini o'rnatish uslubi o'zgacha. Uni yuklab o'rnatishni o'zi kifoya emas. Avval JavaRE degan dasturni yuklab olib o'rnatamiz, keyin esa E-IMZO dasturini yuklab o'rnatamiz, undan keyin esa qayerdadir DSKEYS jildini ochib, ichiga maxfiy kalitlarni ko'chiramiz. Endigina E-IMZO dasturini ishga tushirsa bo'ladi.

Yuqorida ko'rsatilgan misollar bu hali aysbergning bir uchidir. Ulardan tashqari turli-hil muammolar kelib tushish ehtimolligi bor. Misol uchun biron-bir dasturni GitHub dan tortib qayta yig'ib ko'ring. Dasturni yig'ish uchun yana boshqa dasturlarni o'rnatish va sozlash kerakligini tezda anglashni boshlaysiz. Undan tashqari dasturlarni yig'ish aynan sanoqli versiyalarda amalga oshirish mumkinligini tushinib yetasiz.

Nixpkgs ushbu dasturlarni qayerdan izlash, qanday yig'ish va qanday o'rnatish haqidagi ma'lumotlar ombori. Izlash, yig'ish va o'rnatish haqidagi ma'lumotlar Flake'da tuziladi. Flake-esa Nix dasturlash tilida yoziladi. Bu ma'lumotdan nimani tushindik?

1. Flake ichida qanday qilib dasturni izlash, yig'ish va o'rnatish haqidagi ma'lumot beriladi
2. Flake Nix dasturlash tilida yoziladi
3. Nixpkgs ichida turli-hil dasturlarning Flake'lari saqlanadi.

Misol uchun: sizga Google Chrome kerakmi? Nixpkgs ichidan izlang (search.nixos.org) va o'rnating. E-IMZO kerakmi? Uni ham izlab, nomini topib o'rnating.

Endi siz aytishingiz mumkin: "Bu Nix'ning men bilgan apt, pacman, brew, snap, yum, ... kabi dasturdan farqi nimada? Nega men bilgan va men shu vaqtgacha ishlatib kelayotgan x dasturni tashlab Nix ishlatishni boshlashim kerak?". Savolingizga

