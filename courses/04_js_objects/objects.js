const _ = require('lodash');
const crc32 = require('crc-32');

// Синтаксис
/* export default () => {
  const obj = {
    files: ['src/objects.js'],
    config: true,
  };
  return obj;
}; */

// Модификация
/* const normalize = (obj) => {
  obj.name = _.capitalize(obj.name);
  obj.description = obj.description.toLowerCase();
}; */

// Ссылки
/* export default (company1, company2) => {
  const keys = ['name', 'state', 'website'];
  for (const key of keys) {
    if (company1[key] !== company2[key]) {
      return false;
    }
  }

  return true;
}; */

// Объекты в действии
/* export default (domain) => {
  let scheme = '';
  if (domain.startsWith('https://')) {
    scheme = 'https';
    // else if другие протоколы
  } else {
    scheme = 'http';
  }

  const name = domain.replace(`${scheme}://`, '');

  return { scheme, name };
}; */

// Проверка существования свойства
/* const countWords = (sentence) => {
  const words = _.words(sentence);
  const result = {};
  for (const word of words) {
    const lowerWord = word.toLowerCase();
    result[lowerWord] = (result[lowerWord] ?? 0) + 1;
  }

  return result;
}; */

// Обход свойств объекта
/* const pick = (obj, names) => {
  const result = {};
  const keys = Object.keys(obj);
  for (const key of keys) {
    for (const name of names) {
      if (name === key) {
        result[key] = obj[key];
      }
    }
  }

  return result;
} */
// Вложенные объекты
/*
export default (data, keys) => {
  let current = data;
  for (const key of keys) {
    const hasBarProperty = Object.prototype.hasOwnProperty.call(current, key);
    if (!hasBarProperty) {
      return null;
    }
    current = current[key];
  }

  return current;
}; */
// Слияние
/* const fill = (object, keys, data) => {
  const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
  Object.assign(object, filteredData);
} */
// Клонирование (копирование)
/*
const deepClone = (data) => {
  let clone = {};
  for (let key in data) {
    clone[key] = _.isObject(data[key]) ? deepClone(data[key]) : data[key];
  }
  return clone;
} */
// spread и создание новых объектов
/*
const make = (name, data = {}) => {
  const defaultData = {
    state: 'moderating',
    createdAt: Date.now(),
  };

  return { ...defaultData, ...data, name };
}; */
// Деструктуризация
/*
const getSortedNames = (users) => {
  const names = [];

  for (const { name } of users) {
    names.push(name);
  }

  return names.sort();
} */
// Хеш-таблицы
/*
const make = () => {
  const data = [];
  return data;
}
const map = make();

const hash = (key) => {
  const hash = crc32.str(key);
  return Math.abs(hash) % 1000;
}

const set = (map, key, value) => {
  if (!map[hash(key)] || map[hash(key)] && map[hash(key)][0] === key) {
    map[hash(key)] = [key, value];
    return true;
  } else {
    return false;
  }
}

const get = (map, key, defaultValue = null) => {
  const index = hash(key);
  return map[index] && map[index][0] === key ? map[index][1] : defaultValue;
} */
