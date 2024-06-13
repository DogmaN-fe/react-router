import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import BlogPage, { blogLoader } from "./pages/Blogpage";
import SinglePage, { postLoader } from "./pages/Singlepage";
import HomePage from "./pages/Homepage";
import Layout from "./components/layout/layout";
import EditPage from "./pages/EditPage";
import CreatePage, { CreatePostAction } from "./pages/Createpage";
import AboutPage from "./pages/Aboutpage";
import NotFoundPage from "./pages/Notfoundpage";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
  
        <Route path="/posts" element={<BlogPage />} loader={blogLoader} errorElement={<h1>Ошибка!!!</h1>}/>
        <Route path="/posts/:id" element={<SinglePage />} loader={postLoader}/>
        <Route path="/posts/:id/edit" element={<EditPage />} />
        <Route path="/posts/new" element={<CreatePage />} action={CreatePostAction}/>
  
        {/* Вложенный роутинг */}
        <Route path="/about" element={<AboutPage />}>
          <Route path="contacts" element={<p>Our contact</p>} />
          <Route path="team" element={<p>Our team</p>} />
        </Route>
  
        {/* Переадрисация */}
        <Route path="/about-us" element={<Navigate to="/about" replace/>} />
  
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );