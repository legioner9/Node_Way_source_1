**Кроки:**
1. npm i
2. gulp default


**Іконки**
1. закидувати в "dev/static/img/svg" з префіксом "ic-"
2. при запуску (gulp default) вони білдяться в спрайт в "build/static/img/svg/symbol"
3. далі юзати через по бажанню:
  а) use(xlink:href="static/img/svg/symbol/sprite.svg#ic-phone")
     | стукатися до файлу
  а) use(xlink:href="#ic-phone")
     | скопіювати зміст з "build/static/img/svg/symbol/sprite.svg" та вставити в "dev/pug/modules/icons.pug" 
     | далі стукатися напряму
     
вважаю кращим варіант Б, тому що файл icons.pug інклудиться до кожної сторінки, відображається разом із DOM, та не потребує зайвого запиту


**Шрифти**
1. конвертувати в формати TTF, Woff, Woff2
2. закидавати в "dev/static/fonts"
3. підключати в "dev/static/scss/includes/fonts.scss"

@font-face {
  font-family: 'Roboto';
  src: url('../Roboto.woff2') format('woff2'),
  url('../Roboto.woff') format('woff'),
  url('../Roboto.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}


**Кольора**
1. закидавати в "dev/static/scss/includes/var.scss"

відтінки задавати наприклад: $default-100: #272659;


**Pug**
1. основні елементи (скелет, шапка, підвал) - "dev/pug/layouts"
2. модулі (слайдери, таби, віджети та інше) - "dev/pug/modules"
3. контент (сторінки) - "dev/pug/pages"

для створення нової сторінки наприклад "About" - сворити файл "about.pug" в "dev/pug/pages"

/*Міксини*/
знаходяться в "dev/pug/modules/mixin.pug"


**Scss**
1. компоненти - "dev/static/scss/components"
2. підключаються шрифти та кольора - "dev/static/scss/includes"
3. основне - "dev/static/scss/modules"

файл "dev/static/scss/style.scss" - підключає усі вище зазначені враховуючи каскадність
стилі для кастомізації писати в "dev/static/scss/components/customize.scss"

/*Бібліотеки*/
 1. кидати в "dev/static/css/
 2. при білді копіюються в "build/static/css/libs"
 
 
 **JS**
 1. основне в "dev/static/js/main.js"
 2. бібліотеки в "dev/static/js"
 3. файл "build/static/js/libs.min.js" - склеює всі скрипти


**Контент**
1. навігація "data/navigation.json"
2. основне "data/content.json"

приклад:
for i in nav.nav.items
h2.title=content.index.contacts.title


**Картинки**
1. контент - "dev/static/img/content
2. логотипи, загальні що повторюються - "dev/static/img/general"
3. іконки - "dev/static/img/svg"
4. для інтерфейсів (бібліотек) - "dev/static/img/ui"

/*Оптимізація*/
оптимізація через панду tinypng
для активації необхідно прописати ключ в "gulp/tasks/img.js" -> YOUR_API_KEY
