import { Suspense, lazy } from "react";
import GlobalStyle from "./components/GlobalStyle";
//import Landing from './pages/LandingPage/Landing';
import List from "./pages/ListPage/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CreateRecipientPage from './pages/CreateRecipientPage/CreateRecipientPage';
// import UsersRollingPage from './pages/UsersRollingPage/UsersRollingPage';
// import CreateMessagePage from './pages/CreateMessagePage/CreateMessagePage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
//import EditPage from './pages/UsersRollingPage/EditPage';
const Landing = lazy(() => import("./pages/LandingPage/Landing"));
const CreateRecipientPage = lazy(() => import("./pages/CreateRecipientPage/CreateRecipientPage"));
const UsersRollingPage = lazy(() => import("./pages/UsersRollingPage/UsersRollingPage"));
const CreateMessagePage = lazy(() => import("./pages/CreateMessagePage/CreateMessagePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const EditPage = lazy(() => import("./pages/UsersRollingPage/EditPage"));

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<div>...로딩중</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/list" element={<List />} />
            <Route path="/post">
              <Route index element={<CreateRecipientPage />} />
              <Route path=":createdId" element={<UsersRollingPage />} />
              <Route path=":createdId/edit" element={<EditPage />} />
              <Route path=":createdId/message" element={<CreateMessagePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
