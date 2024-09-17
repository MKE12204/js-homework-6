/* 
<!-- Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days. --> */
/* function Worker (n,s,r,d){
    this.name=n;
    this.surname=s;
    this.rate= r;
    this.days=d;
}

Worker.prototype.getSalary = function(){
    return this.days * this.rate;
}

const dif = new Worker('Иван','Иванов',1200, 30);
 document.write("Работник:"+'&nbsp;' + dif.name+'&nbsp;' + dif.surname +','+'&nbsp;'+ 'заработал:' +'&nbsp;'+ dif.getSalary()+','+ '&nbsp;'+'за:'+'&nbsp;'+dif.days+'&nbsp;'+ 'дней'+ "," + '&nbsp;'+'со ставкой:'+ dif.rate);   */
/*  <!-- 
 Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
 який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
 який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
 та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка. -->
 */
/* function MyString(f, s, t) {
    this.first = f;
    this.second = s;
    this.third = t;
  }
  
  MyString.prototype.reverse = function(h) {
    return h.split('').reverse().join('');

  }

  MyString.prototype.ucFirst = function(h) {
    return h.charAt(0).toUpperCase() + h.slice(1);
  }

  MyString.prototype.ucWords = function(h) {
    return h.split(' ').map(q => this.ucFirst(q));
  }

  MyString.prototype.getMetod = function() {
    const firstMet = this.reverse(this.first);
    const SecondMet = this.ucFirst(this.second);
    const thirdMet = this.ucWords(this.third);
    return `Первый метод: ${firstMet}, Второй: ${SecondMet}, Третий: ${thirdMet}`;
  }
  
  const gf = new MyString([1, 2, 3, 4, 5].join(''), 'hello', 'hello world how are you?');
  document.write(gf.getMetod()); */
  