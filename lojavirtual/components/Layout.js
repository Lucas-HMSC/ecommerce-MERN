import Head from './Head';
import Style from './Style';

const Layout = ({ children, title, description, url, image }) => (
  <div>
    <Head
      title={title}
      description={description}
      url={url}
      ogImage={image}
    ></Head>
    <Style />
    <div className="body">{children}</div>
    <footer>
      <div className="flex flex-center">
        <small>&copy; Loja TI = Curso Criando um Ecommerce do Zero</small>
      </div>
    </footer>
  </div>
);

export default Layout;
