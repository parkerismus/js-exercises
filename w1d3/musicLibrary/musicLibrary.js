var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}
// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var playlist in library.playlists) {
    var currentPlaylist = library.playlists[playlist];
      console.log(currentPlaylist.id + ": " + currentPlaylist.name + " - " + currentPlaylist.tracks.length + " tracks")
  }
}
printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var track in library.tracks) {
    var currentTrack = library.tracks[track];
      console.log(currentTrack.id + ": " + currentTrack.name + " by " + currentTrack.artist + " (" + currentTrack.album + ")");
  }
}

printTracks();

// prints a list of tracks for a given playlist, in the form:c
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var currentPlaylist = library.playlists[playlistId];
  console.log(currentPlaylist.id + ": " + currentPlaylist.name + " - " + currentPlaylist.tracks.length + " tracks")
  var trackIds = library.playlists[playlistId].tracks

  for(var i = 0; i < trackIds.length; i++) {
    var track = library.tracks[trackIds[i]];
    console.log(track.id + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
  }
}
var playlistId = "p01";

printPlaylist(playlistId)

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(library.playlists[playlistId].tracks);
}

addTrackToPlaylist("t03", "p01");

// generates a unique id
// (use this for addTrack and addPlaylist)


var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library


var num = Object.keys(library.tracks).length + 1;
var newTrackNumber = function (num) {
  if (num < 10) {
    return ("t0" + num);
  } else {
    return ("t" + num);
  }
}


var addTrack = function (name, artist, album) {
  var newTrack = { name: name , artist: artist , album: album, id: uid() }
  library.tracks[newTrackNumber(num)] = newTrack;
}

addTrack("Yellow", "Coldplay", "Parachutes")

// adds a playlist to the library


var addPlaylist = function (name) {
  var pl = { id: uid(), name: name, tracks: [] }
  library.playlists[name] = pl;
}

addPlaylist("p03");

console.log(library);