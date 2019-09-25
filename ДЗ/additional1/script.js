class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createDiv() {
		let newDiv = document.createElement("div");	
		newDiv.textContent = "Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст Любой текст";
		newDiv.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
		
		document.body.appendChild(newDiv);
	}
}

let newElem = new Options(200, 200, "red", 16, "center");
newElem.createDiv();
