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
        <Bio>
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            aperiam quidem dolore officiis? Neque, ullam, eius quisquam cum
            magnam est aperiam perferendis obcaecati suscipit dolor laborum? Eos
            provident hic velit?
          </p>
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dignissimos adipisci tenetur consequuntur vitae iure dolorum
            provident, aliquid maxime nostrum! Ducimus nihil quisquam in modi,
            dolore vel mollitia tempora repellendus temporibus beatae
            perferendis obcaecati.
          </p>
        </Bio>
      </div>
    </div>
  );
};
