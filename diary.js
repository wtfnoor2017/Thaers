const diaryHeadlines = [
// add new diary headlines under here:

"Conquest Mother",

"Golden Hums of Giants",

"Fractals in the sphere",



"Then those floods may cease",


"My Graceful Contagion",


"Dusting Wings of Palm",


"Savage Cruelty",


"Bull in the dark",

"DUST",

"Savior",

"FUSED IN THE FULL MOON",

"Void of morning",

"QUAKES IN THE FIRE", 

"Purge",

"Beloved mouse in the steam",

"Seaze the night"

];



const diaryEntries = [
// add new diary entries under here:

"Atop her thorny throne-<br>The moth as a queen of the quiet conquest.<br>My hand has been scarred from such sickly sentiment,<br>A nail buried within the layer of stone and silk.<br><br>A giant sleeps within the plains,<br>A litter of crackling graves and crusted crosses<br>From her spine comes the line of grief,<br>From her cloak comes the cost of parting.<br><br>Merely mothers to our fallen trees-<br>Our regret of clinging comes in the quickening anguish of the end.",

"Thy slumber has filled with the metal hum of those glaring giants,<br>Through the ashy birth of night.<br>From flames was given,<br>Such wondrous gifts of knowing-<br>The prophecy of our shifting patterns<br>From the candle in the dark comes a seed of wind,<br>A splinter of smoke,<br>Slipping within the vein-<br>Breaking into the veil.",

"Peering within the glass are the doors-<br>The paths of reflection,<br>Our foretelling fractals.<br><br>† Shall we walk within the arms of the arches?<br>Shall we reach our pointed temple,<br>hiding behind its misty mask?<br><br>Scratching our symbols into the sand,<br>Slowly weaving into the wind,<br>Spinning,<br> through the spiral stairways.",

"My lull is swimming in those soft rays,<br><br>Sinking into the skin of mine,<br><br>Shimmering within these fruitless veins.<br><br>Mother I wish,<br><br>To cease the floods of fire-<br></br>To halt the horns of dawn and sleep,<br><br>Inside the cradle of your crescent-<br><br>O mother I wish<br><br>",


"The band of crows comes to creep,<br><br> crowned with their darkness-<br><br>A heavenly contagion.<br><br>For fools only withdraw from the bind of this silent grace,<br><br>This marriage in hiding.<br><br>Creep from beneath beloved,<br><br>Screech from the bowel of the airs<br><br>Seek me out-<br><br>From below the mirrors of your winged eyes.<br><br>",



"Cradled within the knights palm lie the cursed note-<br><br>The broken wing of whiteness.<br><br>Forsaken in the vines of knowledge we are,<br><br>Content with the plague of lightness<br><br>If the eyes be mine, where might I find such insight of kindness for the shadow? <br><br>Thy teeth are weary,<br><br>Thy robe is torn, <br><br>From a bridge I fall, <br><br>Into the womb of such misty streams.<br><br>",


"What savage cruelty comes from the hiss of morning,<br>From our illness of existence?<br><br>In the senseless chamber we must go,<br>Cracking into the dust of the forgotten hum.<br><br>Where be my chainless kingdom?<br>O mighty darkness where might I find your skin?<br><br>Twisting within a crushing darkness-<br>Spiraling beneath the swirls of snakes.<br><br>My rot, ceased within the ravaging rays of midsummer.<br>",

"Fierce breathing behind the black bushes- a signal of our shocking hour. From the winter comes the coldest killing, we must prepare for this beloved ending.<br></br> Torn away from the gripping cage, we must sacrifice our siren song for the lulling moon. Those who reject such a gentle call shall not be spared from the edge of the spear. The grounds might quake in midday- before the moon meets my eyes once more, if that be the end, I must shed the shell of my outward face.",



"Decaying in the dust is the fire from my lonesome soul. I held the burning hand in destruction and crossed the path behind the black mountain.<br></br> An echo booms in the mist and I join my shadow under the lulling light. The moon sings a song as a whistle in the dark and I submit to this monarch in midnight. Below the void I am visited by my form in this otherworld. A mystical sense of binding must be, a mythical sense of seeking. <br></br>The cypress path reflects within me- through the scrying glass.",

"My love-my savior in the darkness. I have reached for you in the ash of tonight with a burning sincerity. May my voice have been heard from the chamber of the bounday and bounce from the walls of my peering mouth.<br></br><b> I have torn an eye from the veiled skin on my bones</b><br></br> With this eye I might seek into your creeping hole of darknesss. <br></br>I touch the face of my beloved priestess and take her hand through the barren burial as we dance beneath the weeping moon- and I with her, forevermore.",


"<i>Burn, burn, burn.</i> Smoke from a million dusk come my way. Running through the halls of that eternal ending.<br></br> Hand in hand with the eye that molds me. <br></br> Under the void in <br></br>b<br></br>i<br></br>r<br></br>t<br></br>h<br></br><b>...</b>",

"Crystals form from the shaking acid- our form in the darkness of tomorrow.<br></br> I shake tonight as my armor cracks under the moon and must I say, we are near the end.",

"Sounds across the quaking fire, and my beloved fumes sleep before me",

"In the white field there was a rotting cross, with scattered sword and burning shield I cast my hand upon the cracking grounds.",

"All of you are mice crawling up the rotting mountain,<br></br> For I cannot be among those creatures who bleed with greed and hunger<br></br>Rising from the pits of the dark hour, <br></br>Children of the bound mother.<br></br>Cracks come from the clay that molds us.<br></br>Your shadow drags beneath the feet of the sun<br></br>You are the purgers<br></br>Blind soulless creatures<br></br>If you must,<br></br>Search for the pure white light you seeking monsters,<br></br>Find the empty path whom none walk,<br></br>Forget the strings that bind you.",

"It is that darkness that holds us and binds us-Not that sun. Allow yourself to be touched by that- darkness by that distorted figure."

];






// Ignore this:

      
      let currentIndex = 0;
      const diaryContainer = document.querySelector(".diary-container");
      const diaryHeadlineElement = document.getElementById("diary-headline");
      const diaryEntryElement = document.getElementById("diary-entry");
      const prevButton = document.getElementById("prev-button");
      const nextButton = document.getElementById("next-button");
      
      function generateRandomRotation() {
        return (Math.random() * 2) - 1;
      }
      
      diaryHeadlineElement.innerHTML = diaryHeadlines[currentIndex];
      diaryEntryElement.innerHTML = diaryEntries[currentIndex];
      
      prevButton.addEventListener("click", function() {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = diaryEntries.length - 1;
        }
        const rotation = generateRandomRotation();
        diaryContainer.style.transform = `translate(-50%,-50%) rotate(${rotation}deg)`;
        diaryContainer.style.backgroundPosition = `${Math.random() * 100}% ${Math.random() * 100}%`;
        diaryHeadlineElement.innerHTML = diaryHeadlines[currentIndex];
        diaryEntryElement.innerHTML = diaryEntries[currentIndex];
      });
      
      nextButton.addEventListener("click", function() {
        currentIndex++;
        if (currentIndex >= diaryEntries.length) {
          currentIndex = 0;
        }
        const rotation = generateRandomRotation();
        diaryContainer.style.transform = `translate(-50%,-50%) rotate(${rotation}deg)`;
        diaryContainer.style.backgroundPosition = `${Math.random() * 100}% ${Math.random() * 100}%`;
        diaryHeadlineElement.innerHTML = diaryHeadlines[currentIndex];
        diaryEntryElement.innerHTML = diaryEntries[currentIndex];
      });