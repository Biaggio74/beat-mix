// Drum Arrays
const kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
const snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
const hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
const rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];

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
  if (drum && index) {
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
