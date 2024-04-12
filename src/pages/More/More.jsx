import Banner from "../../components/Banner/Banner";
import Accordion from "../../components/Accordion/Accordion";

function More() {
  return (
    <main>
      <Banner text={""} img={"MoreBanner.png"} />
      <div className="accordions-container">
        <Accordion
          title="Fiabilité"
          texts={[
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quidem necessitatibus officiis velit reprehenderit nam ipsam nihil laborum qui dolorem sint beatae distinctio facilis corrupti alias debitis, libero quae? Quae? Vero dolorum voluptatibus, enim corporis illo odit est deserunt eaque et minus libero consequuntur. Maxime a ipsum porro rem blanditiis quis nobis eaque, vero nulla, modi temporibus magni optio provident? In quas voluptate rerum fugiat enim ab nesciunt illo id ut earum reiciendis officia autem odio praesentium quisquam cum unde, nostrum dolorem numquam repellat molestias, deserunt officiis. Corrupti, iure obcaecati! Neque hic provident error numquam in amet perferendis doloremque quae corrupti cupiditate? Porro aliquam quis et sed cumque excepturi similique, voluptatibus, tenetur voluptate ducimus dolore quas voluptas quidem! Alias, quam!",
          ]}
        />
        <Accordion
          title="Respect"
          texts={[
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          ]}
        />
        <Accordion
          title="Service"
          texts={[
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          ]}
        />
        <Accordion
          title="Sécurité"
          texts={[
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          ]}
        />
      </div>
    </main>
  );
}

export default More;
