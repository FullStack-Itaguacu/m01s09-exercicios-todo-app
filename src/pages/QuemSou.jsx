import { Avatar } from "../components/Avatar";
import { Bio } from "../components/Bio";
import { Usuario } from "../components/Usuario";

const redes = [
  {
    icone: "bi-linkedin",
    link: "https://www.linkedin.com/company/lab365/",
  },
  {
    icone: "bi-instagram text-danger",
    link: "https://www.instagram.com/lab365_/",
  },
  {
    icone: "bi-github text-light-emphasis",
    link: "https://github.com/FullStack-Itaguacu",
  },
];

export const QuemSou = () => {
  return (
    <div className="">
      <div className="row border-bottom py-2">
        <div className="col-2">
          <Avatar
            src="https://github.com/FullStack-Itaguacu.png"
            alt="Lab365 - Full Stack Itaguaçu"
          />
        </div>
        <div className="col ">
          <Usuario nome="Lab365" cargo="Instituição de ensino" redes={redes} />
        </div>
      </div>
      <div className="row mt-4">
        <Bio />
      </div>
    </div>
  );
};
