# Космосфера

Русскоязычный информационный портал об астрономии, астрофизике и планетологии.

## Локальный запуск

```powershell
$env:PATH='E:\tools\node-v24.16.0-win-x64;' + $env:PATH
cd E:\astronomy-portal
npm install
npm run dev
```

Локальный адрес: `http://127.0.0.1:4321/`.

## Публикация на GitHub Pages

1. Создайте репозиторий `astronomy-portal` на GitHub.
2. Загрузите файлы проекта в ветку `main`.
3. В репозитории откройте `Settings` -> `Pages`.
4. В `Source` выберите `GitHub Actions`.
5. Откройте вкладку `Actions` и дождитесь выполнения `Deploy to GitHub Pages`.

Публичный адрес будет формата:

```text
https://USERNAME.github.io/astronomy-portal/
```

Для приватного доступа к самому сайту через GitHub Pages обычно нужен GitHub Enterprise Cloud. Без Enterprise проще держать репозиторий приватным, а публичную версию публиковать отдельно.
