---
<style>
body{font-size:1.4em;}
</style>
---

# Подключение `Firestore` в `Angular 13`

Пример подключения БД `Firestore`.

Будущий результат: […здесь](https://a374ru-test.web.app) или [здесь…](https://a374ru.github.io/firestore-a/site)

    :::: Необходимые знания :::::
    1. Установка nodejs
    2. Установка Angular
    3. Владение nerminal
    4. Владение редактором кода

## Создаем Аккаунт в `Google` и заходим на `Firebase`.

1. Читаем доки `Firebase`.
1. Создаем проект в `Firebase`.
1. Создаем приложение и хостинг в проекте.
1. Создаем базу `firestore` и заполняем тестовыми данными.
1. В настройках получаем данные `(`config`)` для локального подключения `FireBase`.

## Устанавливаем `Firebase CLI`

<span style="color: #2C87BF;">Читай о `SDK или CLI` в справке Firebase.

## Устанавливаем Ангуляр

Создаем директорию и разворачиваем проект Ангуляр. Заходим **в терминал** по адресу этой директории.

## Запускаем из папки проект `Firebase`

<span style="color: #e34234;">Здесь важно!!! До установки пакета `@angular/fire` обязатеьльно нужно пройти идентификацию (логин) и выбрать настройки проекта `firebase` на втором шаге.

1. Логинимся в Firebase командой `CLI` –
   ```sh
   $ friebase login
   ```
2. Инициализируем Firebase в нашей директории командой

   ```sh
   $ firebase init
   ```

   и выбираем в предлагаемом меню установщика в терминале три пункта:

   1. **Firestore**
   2. **Hosting**
   3. **Emulators** (локальная среда тестирования приложения), позже пригодится

<br>

## Устанавливаем пакет `Angularfire`

[… о пакете здесь …](<[https://link](https://github.com/angular/angularfire)>)

В предложенных настройках выбираем `firestore`.

<span style="color: #e34234;">Обратите внимание! </span><br /> **`Angularfire`** сам заполнит файл `environment.ts` и добавит нужные импорты и зависимости.

<hr>

## <span style="color: #8F7161;">Подключение приложения (конфигурация) Ангуляр к `firestore` вручную:

Заходим в настройки сервиса `Firebase`. Далее ищем настройки проекта. Настройки SDK. Переносим настройки в файл нашего проета `src/environments/environment.ts` в Ангуляр.

<span style="color: #2C87BF;">Далее вы можете собрать проект и отправить его на хостинг `Firebase`.

<br>

Просмотреть пример данного проекта можно […здесь](https://a374ru-test.web.app)

<hr>
<br>

![img](https://1.bp.blogspot.com/-hOxN5KX2KfY/YPplNP_w6xI/AAAAAAAAGz0/nNxSLwD5lnQhvFnce_DzmIoSRWyY9A3QACLcBGAsYHQ/s800/theend-beats.png)
