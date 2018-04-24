const Log = (t: any, name: string, desc: any) => {
    console.log(`Log: calling ${name}()`);
    return desc;
};

class DigitalWatch  {
    protected date: Date;
    protected hours: number;
    protected minutes: number;


    constructor() {
        
    }
    @Log
    clock() {
        this.date = new Date;
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();   
    }
}

class AnalogWatch extends DigitalWatch {
    private seconds: number;

    constructor() {
        super();
    }

    clock(): string {
        const digit = super.clock();
        this.seconds = this.date.getSeconds();
        return digit + ` : ${this.seconds}`;
    }

    getHours(): number {
        return this.hours;
    }

    getMinutes(): number {
        return this.minutes;
    }

    getSeconds(): number {
        return this.seconds;
    }
}

window.onload = () => {
    const ATime: AnalogWatch = new AnalogWatch();

    const secondElement = document.getElementById("second");
    const minutesElement = document.getElementById("minutes");
    const hourElement = document.getElementById("hour");
    
    const time = document.getElementById('digital');
    
    setInterval(() => {
        ATime.clock();
        let m, h;
        m = ATime.getMinutes() < 10 ? "0" + ATime.getMinutes() : ATime.getMinutes();
        h = ATime.getHours() < 10 ? "0" + ATime.getHours() : ATime.getHours();
     
        secondElement.style.transform = `rotate(${ATime.getSeconds() * 6 -90}deg)`;
        minutesElement.style.transform = `rotate(${ATime.getMinutes() * 60 / 10 -90}deg)`;
        hourElement.style.transform = `rotate(${ATime.getHours() * 360 / 12 -90}deg)`;
        
        time.textContent = `${h} : ${m}`;
    }, 1000);   
    
}