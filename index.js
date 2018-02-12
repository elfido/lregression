class LR {
	constructor(data=[],clearData=true) {
		this.data = data;
	}

	add(x, y) {
		this.data.push([x, y]);
	}

	mean(collection) {
		let tot = 0;
		collection.forEach((i) => {
			tot += i;
		});
		return tot / collection.length;
	}

	std(collection, mean) {
		let diffs = 0;
		collection.forEach((i) => {
			const d = i - mean;
			diffs += (d * d);
		});
		const t = diffs / (collection.length - 1);
		return Math.sqrt(t);
	}

	correleation() {
		const n = 1 / (this.data.length - 1);
		const allX = this.data.map((pair) => { return pair[0] });
		const allY = this.data.map((pair) => { return pair[1] });
		this.meanX = this.mean(allX);
		this.meanY = this.mean(allY);
		this.sX = this.std(allX, this.meanX);
		this.sY = this.std(allY, this.meanY);
		let total = 0;
		for (let i = 0; i < allX.length; i++) {
			const x = allX[i] - this.meanX;
			const y = allY[i] - this.meanY;
			total += x * y;
		}
		const factor = total / (this.sX * this.sY);
		const r = factor / (allX.length - 1);
		return r;
	}

	slope() {
		return this.r * (this.sY / this.sX);
	}

	analize() {
		this.r = this.correleation();
		this.m = this.slope();
		this.b = this.intercept();
		if (this.clearData === true){
			this.data = null;
		}
		return {r: this.r, m: this.m, b: this.b};
	}

	intercept() {
		return this.meanY - (this.m * this.meanX);
	}

	predict(x) {
		return (this.m * x) + this.b;
	}
}

module.exports = LR;