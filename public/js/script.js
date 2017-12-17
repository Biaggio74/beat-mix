// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];

const drums = {
  get kicks () {
    return kicks;
  },
  get snares() {
    return snares;
  },
  get hiHats() {
    return hiHats;
  },
  get rideCymbals() {
    return rideCymbals;
  }
}

const toggleDrum = (drum,index) => {
  if (drum && index >= 0 ) {
    if (drum === 'kicks' || drum === 'snares' || drum === 'hiHats' || drum === 'rideCymbals') {
      //drum string convert to variable
      switch (drum) {
        case 'kicks':
          drum = drums.kicks;
          if (drum[index] === false) {
            drum[index] = true;
          } else if (drum[index] === true){
            drum[index] = false;
          }
          return;
          break;
        case 'snares':
          drum = drums.snares;
          if (drum[index] === false) {
            drum[index] = true;
          } else if (drum[index] === true){
            drum[index] = false;
          }
          return;
          break;
        case 'hiHats':
          drum = drums.hiHats
          if (drum[index] === false) {
            drum[index] = true;
          } else if (drum[index] === true){
            drum[index] = false;
          }
          return;
          break;
        case 'rideCymbals':
          drum = drums.rideCymbals;
          if (drum[index] === false) {
            drum[index] = true;
          } else if (drum[index] === true){
            drum[index] = false;
          }
          return;
          break;
        default:
          return 'Not a valid drum!'
      } // end of switch
    }
    return 'Not valid drum!';
  }
  return 'No input or one input is missing!';
};

const clear = (drum) => {
  const Drums = ['kicks','snares','hiHats','rideCymbals'];
  const drumArray = [drums.kicks,drums.snares,drums.hiHats,drums.rideCymbals];
  let index = Drums.indexOf(drum);
  if (index>=0 && index<4) {
    for (let i = 0; i < drumArray[index].length; i++) {
      drumArray[index][i]=false;
    }
  }
  return;
};

const invert = (beat) => {
  const Drums = ['kicks','snares','hiHats','rideCymbals'];
  const drumArray = [drums.kicks,drums.snares,drums.hiHats,drums.rideCymbals];
  let index = Drums.indexOf(beat);
  if (index>=0 && index<4) {
    for (let i = 0; i < drumArray[index].length; i++) {
      drumArray[index][i] === false ? drumArray[index][i]=true : drumArray[index][i]=false ;
    }
  }
  return;
};

const getNeighborPads = (x,y,size) => {
  const array = [];
  if ( x >= 0 && y >= 0 && size > x && size > y && size > 0) {
    if ( x,y < size && x,y >= 0) {
      for (let i = 1; i < 2; i++) {
        x - i >= 0  ? array.push([x-i,y]) :  [];
        x + i <= 4  ? array.push([x+i,y]) :  [];
        y - i >= 0  ? array.push([x,y-i]) :  [];
        y + i <= 4  ? array.push([x,y+i]) :  [];
      };
    }
  }
  return array;
};

console.log(getNeighborPads(2,2,5));
