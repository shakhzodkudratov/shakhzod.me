---
title: ADT - Algebraichik Ma'lumot Turlari Haqida Ertak
---

Bir bor ekan, bir yo'q ekan, Funktorjon, Applicativbek va Monadullo yashaydigan qishloqda yangi oila ko'chib kelgan ekan. Bu oilada ikki jiyan bor ekan: **Yig'indibek** va **Ko'paytmabonu**.

## Yig'indibek - "YO'QI" Ustasi

Yig'indibek juda qiziq ish bilan shug'ullanar ekan. U odamlarga turli xil **tanlov** beradi. Lekin muhimi - **faqat bittasini** tanlash kerak!

Tasavvur qiling: siz do'konga bordingiz. Yig'indibek sizga deydi:

**"Transport vositasini tanla!"**

- YO`QI velosiped 🚲
- YO`QI mashina 🚗
- YO`QI samolyot ✈️
- YO`QI poyezd 🚂

Siz faqat **bittasini** tanlaysiz! Velosiped tanladingiz - demak mashina, samolyot va poyezd yo'q. Bu **"YO'QI"** (OR) degan ma'noni anglatadi.

**Yig'indibekning qoidasi:**

- Bir nechta variant beradi 📋
- Faqat **bitta** variant tanlaysiz ☝️
- Boshqalari yo'q bo'lib ketadi ❌
- Har bir variant har xil bo'lishi mumkin 🎭

Yana misol - **Ob-havo:**

```
Ob-havo =
  YO'QI Quyoshli ☀️
  YO'QI Yomg'irli 🌧️
  YO'QI Qorli ❄️
  YO'QI Shamolda 💨
```

Bugun faqat **bittasi** bo'ladi! Bir vaqtning o'zida ham quyoshli, ham yomg'irli bo'lmaydi (yoki juda kamdan-kam 🌈).

## Ko'paytmabonu - "VA" Ustasi

Ko'paytmabonu esa boshqacha ishlar ekan. U narsalarni **birlashtiradi** va **hammasi kerak** deydi!

Tasavvur qiling: Ko'paytmabonu sizga **Kitob** yasashni o'rgatadi:

**"Kitob yasash uchun hammasi kerak!"**

- Nom VA ✅
- Muallif VA ✅
- Sahifalar soni VA ✅
- Narx ✅

Bulardan **bittasi** bo'lmasa, kitob bo'lmaydi! Hammasini birga yig'ishingiz kerak.

**Ko'paytmabonuning qoidasi:**

- Bir nechta qism beradi 📦
- **Hammasi** bo'lishi kerak ✅✅✅
- Bittasi yo'q bo'lsa, hamma narsa buziladi ❌
- Tartib muhim 🔢

Misol - **Inson:**

```
Inson =
  Ism VA
  Familiya VA
  Yosh VA
  Manzil
```

Hammasi kerak! Ismsiz inson bo'lmaydi, yoshsiz ham bo'lmaydi!

## Yig'indibek va Ko'paytmabonu Birgalikda

Eng qiziq narsa - bu ikkalasi **birgalikda** ishlaganda sodir bo'ladi! 🎪

### Misol 1: Shakllar 🔷

```
Shakl =
  YO'QI Doira(radius)
  YO'QI To'rtburchak(uzunlik VA kenglik)
  YO'QI Uchburchak(tomon1 VA tomon2 VA tomon3)
```

Ko'rdingizmi? Shakllarni tanlaymiz (YO'QI), lekin har bir shakl o'zining ma'lumotlariga ega (VA)!

### Misol 2: To'lov usuli 💳

```
To'lov =
  YO'QI Naqd(summa)
  YO'QI Karta(karta_raqam VA CVV VA sana)
  YO'QI Payme(telefon_raqam VA kod)
```

Bitta to'lov usulini tanlaymiz, lekin har birining o'z ma'lumotlari bor!

### Misol 3: Xabar (Xavfsizlik bilan!) 📨

```
Xabar =
  YO'QI Oddiy(matn)
  YO'QI Maxfiy(matn VA parol)
  YO'QI Rasmli(matn VA rasm_fayl)
  YO'QI Bo'sh
```

**Bo'sh** - bu ham muhim variant! Ba'zan hech narsa yo'q bo'lishi mumkin.

## Hayotiy Misol: Maktabdagi Ovqatlanish 🍽️

Oshxona xodimi sizga savol beradi:

```
Ovqat =
  YO'QI Birinchi_taom(sho'rva VA non)
  YO'QI Ikkinchi_taom(palov VA salat VA kompot)
  YO'QI Desert(tort VA choy)
```

Siz **faqat bittasini** tanlaysiz (Yig'indibek!), lekin tanlaganingizda **hamma narsasi** keladi (Ko'paytmabonu!).

Agar ikkinchi taomni tanlasangiz: palov **VA** salat **VA** kompot - hammasini olasiz! Bittasini olib, boshqasini qoldira olmaysiz.

## Daraxt Misoli 🌳

Eng go'zal misol - **oilaviy daraxt:**

```
Odam =
  YO'QI Bola(ism VA yosh)
  YO'QI Kattalar(
    ism VA
    yosh VA
    kasb VA
    bolalari  // Bu yerda yana Odam ro'yxati!
  )
```

Bu **rekursiv** ADT! Odamning bolalari ham Odam, ularning ham bolalari bor... shunday davom etaveradi! 👨‍👩‍👧‍👦

## Nima uchun "Algebraichik"? 🧮

**Yig'indibek** - qo'shish kabi: 2 **+** 3 = 5 variant  
**Ko'paytmabonu** - ko'paytirish kabi: 2 **×** 3 = 6 kombinatsiya

Misol:

```
Kiyim =
  YO'QI Ko'ylak
  YO'QI Shim
```

```
Rang =
  YO'QI Qizil
  YO'QI Kok
  YO'QI Yashil
```

```
Kiyim_Rang = Kiyim VA Rang
```

Nechta kombinatsiya? 2 × 3 = 6 ta!

- Ko'ylak + Qizil
- Ko'ylak + Kok
- Ko'ylak + Yashil
- Shim + Qizil
- Shim + Kok
- Shim + Yashil

## Xulosa

Shunday qilib, Yig'indibek va Ko'paytmabonu qishloqda hamma narsani tartibga solib berganlar ekan. Hozir hamma:

- **YO'QI** (Yig'indibek) yordamida tanlov qiladi 🎯
- **VA** (Ko'paytmabonu) yordamida narsalarni birlashtiradi 🔗
- Ikkalasini birgalikda ishlatib, murakkab tuzilmalar yasaydi 🏗️

Va hammasi baxtli-shodlik yashaganlar! 🎉

**Eslab qoling:**

- **Yig'indibek (Sum Type)** = YO'QI, YO'QI, YO'QI... (faqat bittasi!) ☝️
- **Ko'paytmabonu (Product Type)** = VA, VA, VA... (hammasi kerak!) ✅
- **Ikkalasi birgalikda** = Juda kuchli! 💪

Tugadi! 🌟
