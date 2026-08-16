// abstraction

interface MediaPlayer{
  play(): void;
  pause():void;
  stop():void;
}

class MusicPlayer implements MediaPlayer{
  play(){
    console.log("Playing Music")
  }
  pause(): void {
    console.log("Music Paused...")
  }

  stop(): void {
    console.log("Music stoped")
  }
}

// const MkPlayer = new MusicPlayer()
// MkPlayer.play()

abstract class MediaPlayer2{
  abstract play(): void;
  abstract pause():void;
  abstract stop():void;
}

class MkPlayer2 extends MediaPlayer2{
  play(){
    console.log("Playing Music")
  }
  pause(): void {
    console.log("Music Paused...")
  }

  stop(): void {
    console.log("Music stoped")
  }
}