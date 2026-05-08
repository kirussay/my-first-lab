// ============================================================
// ЛАБОРАТОРНАЯ РАБОТА №4: ОСНОВЫ JAVASCRIPT
// ============================================================

console.log('%c=== НАЧАЛО ЛАБОРАТОРНОЙ РАБОТЫ №4 ===', 'color: #00AA00; font-size: 16px; font-weight: bold;');

// ============================================================
// ЗАДАЧА 1: ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ
// ============================================================
console.log('%c\n1️⃣ ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ', 'color: #0066CC; font-size: 14px; font-weight: bold;');

// Создаем переменные разных типов
const userName = 'Александр';           // Строка (String)
const age = 25;                         // Число (Number)
const isStudent = true;                 // Булево значение (Boolean)
const email = undefined;                // Undefined
const city = null;                      // Null

// Шаблонные строки (Template Literals) - используют обратные кавычки
const greeting = `Привет, меня зовут ${userName}. Мне ${age} лет. Я ${isStudent ? 'учусь' : 'не учусь'}.`;
console.log('Приветствие:', greeting);

// Проверка типов данных
console.log(`Тип переменной "userName": ${typeof userName}`);
console.log(`Тип переменной "age": ${typeof age}`);
console.log(`Тип переменной "isStudent": ${typeof isStudent}`);

// ============================================================
// ЗАДАЧА 2: ФУНКЦИИ (РАЗНЫЕ СПОСОБЫ ОБЪЯВЛЕНИЯ)
// ============================================================
console.log('%c\n2️⃣ ФУНКЦИИ', 'color: #0066CC; font-size: 14px; font-weight: bold;');

// Способ 1: Function Declaration (объявление функции)
// Это самый классический способ объявления функции
function calculateSum(a, b) {
    return a + b;
}

console.log('Function Declaration - сумма 10 + 15:', calculateSum(10, 15));

// Способ 2: Function Expression (функциональное выражение)
// Функция присваивается переменной. Может быть анонимной или с названием.
const multiply = function(a, b) {
    return a * b;
};

console.log('Function Expression - произведение 8 * 7:', multiply(8, 7));

// Способ 3: Arrow Function (стрелочная функция)
// Современный синтаксис ES6. Более компактная запись.
// Если одна строка - return не нужен
const divide = (a, b) => a / b;

console.log('Arrow Function - деление 100 / 4:', divide(100, 4));

// Arrow Function с несколькими строками кода
const getStatus = (score) => {
    if (score >= 80) return 'Отлично!';
    if (score >= 60) return 'Хорошо!';
    return 'Нужно учиться!';
};

console.log('Статус для оценки 85:', getStatus(85));

// Функция с параметрами по умолчанию
// Default parameters помогают избежать ошибок, когда параметр не передан
function greet(name = 'Гость', greeting = 'Добро пожаловать') {
    return `${greeting}, ${name}!`;
}

console.log('С параметрами по умолчанию:', greet());
console.log('С переданными параметрами:', greet('Иван', 'Привет'));

// ============================================================
// ЗАДАЧА 3: ОБЪЕКТЫ И ДЕСТРУКТУРИЗАЦИЯ
// ============================================================
console.log('%c\n3️⃣ ОБЪЕКТЫ И ДЕСТРУКТУРИЗАЦИЯ', 'color: #0066CC; font-size: 14px; font-weight: bold;');

// Создаем объект с несколькими полями
const user = {
    name: 'Мария',
    age: 28,
    city: 'Москва',
    skills: ['JavaScript', 'React', 'CSS'],
    contact: {
        email: 'maria@example.com',
        phone: '+7-999-123-45-67'
    }
};

console.log('Исходный объект user:', user);

// Деструктуризация объекта - извлекаем нужные свойства
// Это удобнее, чем обращаться через user.name, user.age и т.д.
const { name, age: userAge, skills } = user;
console.log(`Деструктуризованные данные: ${name}, ${userAge} лет, навыки: ${skills.join(', ')}`);

// Optional Chaining (?.) - безопасный доступ к вложенным свойствам
// Если свойство не существует, вернет undefined вместо ошибки
console.log('Email через optional chaining:', user?.contact?.email);
console.log('Несуществующее свойство:', user?.contact?.address?.street); // undefined, без ошибки

// Проверка существования свойства с optional chaining
const phone = user?.contact?.phone ?? 'Номер не указан';
console.log('Номер телефона или значение по умолчанию:', phone);

// ============================================================
// ЗАДАЧА 4: МАССИВЫ И ЦЕПОЧКА МЕТОДОВ (METHOD CHAINING)
// ============================================================
console.log('%c\n4️⃣ МАССИВЫ И METHOD CHAINING', 'color: #0066CC; font-size: 14px; font-weight: bold;');

// Массив объектов - список проектов с оценками
const projects = [
    { title: 'Портфолио', level: 'beginner', rating: 8 },
    { title: 'Чат-приложение', level: 'intermediate', rating: 7 },
    { title: 'Социальная сеть', level: 'advanced', rating: 9 },
    { title: 'Калькулятор', level: 'beginner', rating: 6 },
    { title: 'REST API', level: 'intermediate', rating: 8.5 },
    { title: 'Мобильное приложение', level: 'advanced', rating: 9.5 }
];

console.log('Исходный массив проектов:', projects);

// Method Chaining - цепочка методов для обработки массива
// 1. filter() - оставляем только intermediate и advanced проекты
// 2. map() - преобразуем в новый объект с только нужными полями
// 3. sort() - сортируем по рейтингу в убывающем порядке
const processedProjects = projects
    .filter(project => project.level !== 'beginner') // Фильтруем: оставляем только сложные проекты
    .map(project => ({                                 // Преобразуем структуру
        name: project.title.toUpperCase(),
        difficulty: project.level,
        score: project.rating
    }))
    .sort((a, b) => b.score - a.score);               // Сортируем по оценке (от большего к меньшему)

console.log('После цепочки методов (filter → map → sort):', processedProjects);

// Альтернативный пример цепочки с reduce
const avgRating = projects
    .filter(p => p.level === 'intermediate')
    .reduce((sum, p) => sum + p.rating, 0) / 
    projects.filter(p => p.level === 'intermediate').length;

console.log('Средняя оценка intermediate проектов:', avgRating.toFixed(2));

// ============================================================
// ЗАДАЧА 5: ЛОГИКА (IF/ELSE, TERNARY, ЦИКЛ)
// ============================================================
console.log('%c\n5️⃣ ЛОГИКА: IF/ELSE, TERNARY OPERATOR, FOR...OF', 'color: #0066CC; font-size: 14px; font-weight: bold;');

// Пример 1: if/else с проверкой условий
const score = 75;
let result;

if (score >= 90) {
    result = 'Оценка: A (Отлично)';
} else if (score >= 75) {
    result = 'Оценка: B (Хорошо)';
} else if (score >= 60) {
    result = 'Оценка: C (Удовлетворительно)';
} else {
    result = 'Оценка: F (Неудовлетворительно)';
}

console.log('if/else результат для оценки 75:', result);

// Пример 2: Тернарный оператор - компактная версия if/else
// Синтаксис: условие ? значение_если_true : значение_если_false
const age_check = 20;
const canVote = age_check >= 18 ? 'Может голосовать' : 'Не может голосовать';
console.log('Ternary operator - право на голос (возраст 20):', canVote);

// Пример 3: Вложенные тернарные операторы
const licenseStatus = age_check >= 18 
    ? (age_check >= 21 ? 'Лицензия тип A' : 'Лицензия тип B')
    : 'Слишком молодой';
console.log('Вложенный ternary - статус лицензии:', licenseStatus);

// Пример 4: Цикл for...of для итерации по элементам массива
// Это более современный способ, чем обычный for или forEach
const skills_list = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'];
console.log('Цикл for...of - мои навыки:');

for (const skill of skills_list) {
    // Используем тернарный оператор для добавления звездочки к сложным навыкам
    const complexity = skill === 'React' || skill === 'Node.js' ? ' ⭐ (сложный)' : '';
    console.log(`  • ${skill}${complexity}`);
}

// Цикл for...of по объекту с Object.entries()
const config = { theme: 'dark', language: 'ru', notifications: true };
console.log('Цикл for...of по объекту:');

for (const [key, value] of Object.entries(config)) {
    console.log(`  ${key}: ${value}`);
}

// ============================================================
// ЗАДАЧА 6: ЗАМЫКАНИЕ (CLOSURE)
// ============================================================
console.log('%c\n6️⃣ ЗАМЫКАНИЕ (CLOSURE)', 'color: #0066CC; font-size: 14px; font-weight: bold;');

// Замыкание - это функция, которая "запоминает" переменные из внешней области видимости
// Даже после того, как внешняя функция завершила выполнение

function createCounter() {
    let count = 0; // Переменная в области видимости createCounter
    
    // Возвращаем объект с методами, которые имеют доступ к count
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

// Каждый вызов createCounter() создает свое замыкание с собственной переменной count
const counter1 = createCounter();
const counter2 = createCounter();

console.log('Счетчик 1 - начальное значение:', counter1.getCount());
console.log('Счетчик 1 - после increment():', counter1.increment());
console.log('Счетчик 1 - после increment():', counter1.increment());
console.log('Счетчик 1 - после decrement():', counter1.decrement());

console.log('Счетчик 2 - независимый счетчик:', counter2.getCount());
console.log('Счетчик 2 - после increment():', counter2.increment());

// Другой пример замыкания - функция-генератор ID
function createIdGenerator(prefix) {
    let id = 0;
    
    return function() {
        id++;
        return `${prefix}-${id}`;
    };
}

const generateUserId = createIdGenerator('USER');
const generatePostId = createIdGenerator('POST');

console.log('Генерируем ID пользователей:', generateUserId(), generateUserId(), generateUserId());
console.log('Генерируем ID постов:', generatePostId(), generatePostId());

// ============================================================
// ДОПОЛНИТЕЛЬНЫЙ ПРИМЕР: КОМБИНАЦИЯ ВСЕХ КОНЦЕПЦИЙ
// ============================================================
console.log('%c\n⭐ КОМБИНИРОВАННЫЙ ПРИМЕР', 'color: #0066CC; font-size: 14px; font-weight: bold;');

// Создаем функцию, которая обрабатывает данные разными способами
function analyzeUsers(users) {
    // Деструктуризация параметра
    return users
        .filter(u => u.age >= 18)
        .map(u => {
            const { name, age, skills } = u;
            return {
                name: name.toUpperCase(),
                ageGroup: age >= 30 ? '30+' : (age >= 25 ? '25-29' : '18-24'),
                skillCount: skills?.length ?? 0,
                description: `${name} умеет: ${skills?.join(', ') ?? 'навыки не указаны'}`
            };
        })
        .sort((a, b) => b.skillCount - a.skillCount);
}

const users = [
    { name: 'Игорь', age: 22, skills: ['Python', 'JavaScript'] },
    { name: 'Елена', age: 35, skills: ['Java', 'SQL', 'Docker'] },
    { name: 'Дмитрий', age: 18, skills: ['HTML', 'CSS'] },
    { name: 'Анна', age: 28, skills: ['JavaScript', 'React', 'Node.js', 'PostgreSQL'] }
];

const analyzedUsers = analyzeUsers(users);
console.log('Анализированные пользователи:', analyzedUsers);

// ============================================================
// ИТОГИ
// ============================================================
console.log('%c\n=== КОНЕЦ ЛАБОРАТОРНОЙ РАБОТЫ №4 ===\n', 'color: #00AA00; font-size: 16px; font-weight: bold;');
console.log('%cВсе задачи выполнены! Откройте консоль для просмотра результатов.', 'color: #00AA00; font-size: 12px;');
