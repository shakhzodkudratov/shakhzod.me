[Mister Bomb - YouTube](https://www.youtube.com/c/MrBombMusic)

[Get started | Learning Music (Beta) (ableton.com)](https://learningmusic.ableton.com/index.html)

[https://daveconservatoire.org/](https://daveconservatoire.org/)

[https://www.lightnote.co/course](https://www.lightnote.co/course)

[Melodics - The new way to learn to play music.](https://www.melodics.com/)

[Splice - Royalty-Free Sounds & Rent-to-Own Plugins](https://splice.com/)

[Browse | Splice](https://splice.com/skills?utm_source=youtube&utm_medium=social)

[Learn Music Theory in 15 Minutes (FREE MIDI Files) | Splice - YouTube](https://www.youtube.com/watch?v=4LLiEMEDGy0)

[Watch this before taking AP Music Theory... - YouTube](https://www.youtube.com/watch?v=KMX8yid6KPg)

[How I'd Learn Music Theory (If I Had To Start Over) - YouTube](https://www.youtube.com/watch?v=2pirdPK5avU)

[Making Music with CODE?! (With DJ_Dave and Sam Aaron) - YouTube](https://www.youtube.com/watch?v=vuSZQnkOB_Y)

[Catalog of Attributes | Making Music book by Ableton](https://makingmusic.ableton.com/catalog-of-attributes)

[https://learningsynths.ableton.com/](https://learningsynths.ableton.com/)

[Loop talks | Ableton](https://www.ableton.com/en/blog/loop/)

[Active Listening | Making Music book by Ableton](https://makingmusic.ableton.com/active-listening)

[https://www.lightnote.co/course](https://www.lightnote.co/course)

[How To Make Techno: 11 Need-To-Know Techniques - EDMProd](https://www.edmprod.com/how-to-make-techno/)

HOW TO TECHNO google

[https://www.youtube.com/watch?v=zxxhw270Cek](https://www.youtube.com/watch?v=zxxhw270Cek)

Splice Techno Samples

```bash
use_bpm 130

# PRESET_START

live_loop :mtrnm do
  sleep 1
end

define :pattern do |pattern|
  return pattern.ring.tick == "x"
end

# PRESET_END

live_loop :kick, sync: :mtrnm do
  amp = 3
  sample :bd_haus, amp: amp if pattern "x-----x---x--x--"
  sleep 0.25
end

live_loop :bassline, sync: :mtrnm do
  sleep 1
  sample :ambi_haunted_hum
  sleep 1
end
```