class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    newDiv() {
        let elem = document.createElement('elem');
        document.body.appendChild(elem);
        let styles = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
        elem.style.cssText = styles;
    }
}

let example = new Options(20, 30, 'pink', 16, 'center');

example.newDiv();