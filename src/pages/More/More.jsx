import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

function More() {
  return (
    <main className="more-page-main">
      <Banner text={""} img={"img/more-banner.png"} />
      <div className="collapses-container">
        <Collapse
          title="Fiabilité"
          texts={[
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quidem necessitatibus officiis velit reprehenderit nam ipsam nihil laborum qui dolorem sint beatae distinctio facilis corrupti alias debitis, libero quae? Quae? Vero dolorum voluptatibus, enim corporis illo odit est deserunt eaque et minus libero consequuntur. Maxime a ipsum porro rem blanditiis quis nobis eaque, vero nulla, modi temporibus magni optio provident? In quas voluptate rerum fugiat enim ab nesciunt illo id ut earum reiciendis officia autem odio praesentium quisquam cum unde, nostrum dolorem numquam repellat molestias, deserunt officiis. Corrupti, iure obcaecati! Neque hic provident error numquam in amet perferendis doloremque quae corrupti cupiditate? Porro aliquam quis et sed cumque excepturi similique, voluptatibus, tenetur voluptate ducimus dolore quas voluptas quidem! Alias, quam!",
          ]}
        />
        <Collapse
          title="Respect"
          texts={[
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          ]}
        />
        <Collapse
          title="Service"
          texts={[
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          ]}
        />
        <Collapse
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
