import Avatar from "../img/transferir.jpg";

// componentes
import SocialNetworks from "./SocialNetworks";
import informationContainer from "./informationContainer";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Elton Lima" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <informationContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
