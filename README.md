# Lab 07.1 — Code Splitting

Использовано React.lazy() и Suspense для ленивой загрузки страниц.

Реализовано:
- Dashboard
- Settings
- Profile
- Suspense fallback (spinner)

Lazy пример:
const Dashboard = lazy(() => import("./pages/Dashboard"));

Suspense:
<Suspense fallback={<LoadingSpinner />}>

Результат:
Страницы загружаются динамически, приложение работает корректно.
