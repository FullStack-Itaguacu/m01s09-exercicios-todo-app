import { Avatar } from "../components/Avatar";
import { Bio } from "../components/Bio";
import { Usuario } from "../components/Usuario";

const redes = [
  {
    icone: "bi-linkedin",
    link: "https://www.linkedin.com/in/michaelnsc/",
  },
  {
    icone: "bi-instagram text-danger",
    link: "https://www.instagram.com/tiomikadev/",
  },
  {
    icone: "bi-github text-light-emphasis",
    link: "https://github.com/mikansc",
  },
];

export const QuemSou = () => {
  return (
    <div className="">
      <div className="row border-bottom py-2">
        <div className="col-2">
          <Avatar src="https://github.com/mikansc.png" alt="Michael" />
        </div>
        <div className="col ">
          <Usuario
            nome="Michael Nascimento"
            cargo="Software Developer"
            redes={redes}
          />
        </div>
      </div>
      <div className="row mt-4">
        <Bio />
      </div>
    </div>
  );
};
