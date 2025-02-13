const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext('2d');

const image1 = new Image();
image1.src = "./img/us-no-bg.png";
const inputSlider = document.querySelector("#resolution");
const inputLabel = document.querySelector("#resolutionLabel");
inputSlider.addEventListener("change", handleSlider);

class Cell {
    constructor(x, y, symbol, color) {
        this.x = x;
        this.y = y;
        this.symbol = symbol;
        this.color = color;
    }

    draw(ctx) {
        ctx.shadowColor = "rgba(0, 0, 0, 0.25)"; // Shadow color (black with 50% opacity)
        ctx.shadowBlur = 5;  // Blur level
        ctx.shadowOffsetX = 5; // Right offset
        ctx.shadowOffsetY = 5; // Downward offset
        ctx.fillStyle = this.color;
        ctx.fillText(this.symbol, this.x, this.y);
    }
}

class AsciiEffect {
    #imageCellArray = [];
    #pixels = [];
    #ctx;
    #width;
    #height; 

    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        this.#ctx.drawImage(image1, 0, 0, this.#width, this.#height);
        this.#pixels = this.#ctx.getImageData(0, 0, this.#width, this.#height);
        // console.log(this.#pixels.data);
    }

    #convertToSymbol(value) {
        // if (g > 250) return '@';
        // else if (g > 240) return '*';
        // else if (g > 220) return '+';
        // else if (g > 200) return '#';
        // else if (g > 180) return '&';
        // else if (g > 160) return '%';
        // else if (g > 140) return '_';
        // else if (g > 120) return ':';
        // else if (g > 100) return '$';
        // else if (g > 80) return '/';
        // else if (g > 60) return '-';
        // else if (g > 40) return 'X';
        // else if (g > 20) return 'W';
        // else return '';

        // if (g > 250) return '';
        // else if (g > 240) return 'W';
        // else if (g > 220) return 'X';
        // else if (g > 200) return '-';
        // else if (g > 180) return '/';
        // else if (g > 160) return '$';
        // else if (g > 140) return ':';
        // else if (g > 120) return '_';
        // else if (g > 100) return '%';
        // else if (g > 80) return '&';
        // else if (g > 60) return '#';
        // else if (g > 40) return '+';
        // else if (g > 20) return '*';
        // else return '@';        

        // if (g > 240) return '.';
        // else if (g > 225) return ',';
        // else if (g > 210) return ':';
        // else if (g > 195) return ';';
        // else if (g > 180) return 'i';
        // else if (g > 165) return '!';
        // else if (g > 150) return 'I';
        // else if (g > 135) return 'L';
        // else if (g > 120) return 'T';
        // else if (g > 105) return 'V';
        // else if (g > 90) return 'U';
        // else if (g > 75) return 'C';
        // else if (g > 60) return 'Z';
        // else if (g > 50) return 'Y';
        // else if (g > 40) return 'X';
        // else if (g > 35) return 'E';
        // else if (g > 30) return 'P';
        // else if (g > 25) return 'K';
        // else if (g > 20) return 'A';
        // else if (g > 15) return 'N';
        // else if (g > 10) return 'H';
        // else if (g > 5) return 'Q';
        // else if (g > 0) return '0';
        // else return '@';

        let characters = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";
        characters = characters.split("").reverse().join("");

        if (value >= 250) return characters[0];
        else if (value >= 247) return characters[1];
        else if (value >= 244) return characters[2];
        else if (value >= 241) return characters[3];
        else if (value >= 238) return characters[4];
        else if (value >= 235) return characters[5];
        else if (value >= 232) return characters[6];
        else if (value >= 229) return characters[7];
        else if (value >= 226) return characters[8];
        else if (value >= 223) return characters[9];
        else if (value >= 220) return characters[10];
        else if (value >= 217) return characters[11];
        else if (value >= 214) return characters[12];
        else if (value >= 211) return characters[13];
        else if (value >= 208) return characters[14];
        else if (value >= 205) return characters[15];
        else if (value >= 202) return characters[16];
        else if (value >= 199) return characters[17];
        else if (value >= 196) return characters[18];
        else if (value >= 193) return characters[19];
        else if (value >= 190) return characters[20];
        else if (value >= 187) return characters[21];
        else if (value >= 184) return characters[22];
        else if (value >= 181) return characters[23];
        else if (value >= 178) return characters[24];
        else if (value >= 175) return characters[25];
        else if (value >= 172) return characters[26];
        else if (value >= 169) return characters[27];
        else if (value >= 166) return characters[28];
        else if (value >= 163) return characters[29];
        else if (value >= 160) return characters[30];
        else if (value >= 157) return characters[31];
        else if (value >= 154) return characters[32];
        else if (value >= 151) return characters[33];
        else if (value >= 148) return characters[34];
        else if (value >= 145) return characters[35];
        else if (value >= 142) return characters[36];
        else if (value >= 139) return characters[37];
        else if (value >= 136) return characters[38];
        else if (value >= 133) return characters[39];
        else if (value >= 130) return characters[40];
        else if (value >= 127) return characters[41];
        else if (value >= 124) return characters[42];
        else if (value >= 121) return characters[43];
        else if (value >= 118) return characters[44];
        else if (value >= 115) return characters[45];
        else if (value >= 112) return characters[46];
        else if (value >= 109) return characters[47];
        else if (value >= 106) return characters[48];
        else if (value >= 103) return characters[49];
        else if (value >= 100) return characters[50];
        else if (value >= 97) return characters[51];
        else if (value >= 94) return characters[52];
        else if (value >= 91) return characters[53];
        else if (value >= 88) return characters[54];
        else if (value >= 85) return characters[55];
        else if (value >= 82) return characters[56];
        else if (value >= 79) return characters[57];
        else if (value >= 76) return characters[58];
        else if (value >= 73) return characters[59];
        else if (value >= 70) return characters[60];
        else if (value >= 67) return characters[61];
        else if (value >= 64) return characters[62];
        else if (value >= 61) return characters[63];
        else if (value >= 58) return characters[64];
        else if (value >= 55) return characters[65];
        else return characters[66];
        

        // if (value >= 251) return characters[0];
        // else if (value >= 247) return characters[1];
        // else if (value >= 243) return characters[2];
        // else if (value >= 239) return characters[3];
        // else if (value >= 235) return characters[4];
        // else if (value >= 231) return characters[5];
        // else if (value >= 227) return characters[6];
        // else if (value >= 223) return characters[7];
        // else if (value >= 219) return characters[8];
        // else if (value >= 215) return characters[9];
        // else if (value >= 211) return characters[10];
        // else if (value >= 207) return characters[11];
        // else if (value >= 203) return characters[12];
        // else if (value >= 199) return characters[13];
        // else if (value >= 195) return characters[14];
        // else if (value >= 191) return characters[15];
        // else if (value >= 187) return characters[16];
        // else if (value >= 183) return characters[17];
        // else if (value >= 179) return characters[18];
        // else if (value >= 175) return characters[19];
        // else if (value >= 171) return characters[20];
        // else if (value >= 167) return characters[21];
        // else if (value >= 163) return characters[22];
        // else if (value >= 159) return characters[23];
        // else if (value >= 155) return characters[24];
        // else if (value >= 151) return characters[25];
        // else if (value >= 147) return characters[26];
        // else if (value >= 143) return characters[27];
        // else if (value >= 139) return characters[28];
        // else if (value >= 135) return characters[29];
        // else if (value >= 131) return characters[30];
        // else if (value >= 127) return characters[31];
        // else if (value >= 123) return characters[32];
        // else if (value >= 119) return characters[33];
        // else if (value >= 115) return characters[34];
        // else if (value >= 111) return characters[35];
        // else if (value >= 107) return characters[36];
        // else if (value >= 103) return characters[37];
        // else if (value >= 99) return characters[38];
        // else if (value >= 95) return characters[39];
        // else if (value >= 91) return characters[40];
        // else if (value >= 87) return characters[41];
        // else if (value >= 83) return characters[42];
        // else if (value >= 79) return characters[43];
        // else if (value >= 75) return characters[44];
        // else if (value >= 71) return characters[45];
        // else if (value >= 67) return characters[46];
        // else if (value >= 63) return characters[47];
        // else if (value >= 59) return characters[48];
        // else if (value >= 55) return characters[49];
        // else if (value >= 51) return characters[50];
        // else if (value >= 47) return characters[51];
        // else if (value >= 43) return characters[52];
        // else if (value >= 39) return characters[53];
        // else if (value >= 35) return characters[54];
        // else if (value >= 31) return characters[55];
        // else if (value >= 27) return characters[56];
        // else if (value >= 23) return characters[57];
        // else if (value >= 19) return characters[58];
        // else if (value >= 15) return characters[59];
        // else if (value >= 12) return characters[60];
        // else if (value >= 9) return characters[61];
        // else if (value >= 6) return characters[62];
        // else if (value >= 4) return characters[63];
        // else return characters[67]; // Value is 0        

    }

    #scanImage(cellSize) {
        this.#imageCellArray = [];
        for (let y = 0; y < this.#pixels.height; y += cellSize) {
            for (let x = 0; x < this.#pixels.width; x += cellSize) {
                const posX = x * 4;
                const posY = y * 4;
                const pos = (posY * this.#pixels.width) + posX;

                if (this.#pixels.data[pos + 3] > 128) {
                    const red = this.#pixels.data[pos];
                    const green = this.#pixels.data[pos + 1];
                    const blue = this.#pixels.data[pos + 2];
                    const total = red + green + blue;
                    const averageColorValue = total/3;
                    const color = "rgb(" + red + "," + green + "," + blue + ")";
                    const symbol = this.#convertToSymbol(averageColorValue);
                    this.#imageCellArray.push(new Cell(x, y, symbol, "#552D18"));
                }
            }
        }
        console.log(this.#imageCellArray);
    }

    #drawAscii() {
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        for (let i = 0; i < this.#imageCellArray.length; i++) {
            this.#imageCellArray[i].draw(this.#ctx);
        }
    }

    draw(cellSize) {
        this.#scanImage(cellSize);
        this.#drawAscii();
    }
}

let effect;

function handleSlider() {
    if (inputSlider.value == 1) {
        inputLabel.innerHTML = 'Original image';
        ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    } else {
        inputLabel.innerHTML = "Resolution: " + inputSlider.value + " px";
        ctx.font = parseInt(inputSlider.value) * 1.2 + "px Verdana";
        effect.draw(parseInt(inputSlider.value));
    }
}

image1.onload = function initialize() {
    let imageWidth = image1.width;
    let imageHeight = image1.height;
    canvas.width = imageWidth;
    canvas.height = imageHeight;
    // ctx.drawImage(image1, 0, 0);
    effect = new AsciiEffect(ctx, imageWidth, imageHeight);
    handleSlider();
}