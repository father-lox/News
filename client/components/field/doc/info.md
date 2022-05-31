# Компонент field

Компонент field - поле ввода данных.

![Представление field элемента](field.png)

1. Название поля
2. Поясняющие сообщения
3. Текст ошибки

## Параметры


| Наименование  | Обязательный | Значение | Описание                                                                                                                                  |
| --------------------------- | -------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fieldName`               | да                     | строка     | устанавливает название поля                                                                                              |
| `inputType`               | да                     | строка     | задает тип поля воода, должно соответсвовать любому из значений HTML-атрибута`type` |
| `noteText`                | нет                   | строка     | устанавливает текст поясняющего сообщения                                                                   |
| `errorMessage`            | нет                   | строка     | устанавливает текст ошибки                                                                                                |
| `absolutePathToFieldIcon` | да                     | строка     | путь до иллюстрации поля                                                                                                     |