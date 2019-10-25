import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./recipe.css"
import Img from "../components/image"

const LatestRecipes = () => (
  <Layout>
    <SEO title="LatestRecipesPage" />

    <article className="recipe-layout1">
      <div className="blog-title">
        <h1>
          <b>CHICKEN AND AUBERGINE CHANA</b>
        </h1>
      </div>
      <h2 className="recipe-subheading">
        Chicken Thighs, Soft Aubergine, and Healthy Brown Chickpeas in an Indian
        Spiced Yoghurt Sauce
      </h2>

      <div className="blog-intro">
        <p className="author-info">RECIPE BY SALLY WHITE </p>
        <div className="info-box">
          <ul className="top-info">
            <li>
              <b>Duration</b>
            </li>
            <li>
              <b>Serves</b>
            </li>
            <li>
              <b>Difficulty</b>
            </li>
          </ul>

          <ul className="sub-info">
            <li>1hr 20min</li>
            <li>4-5 people</li>
            <li>Intermediate</li>
          </ul>
        </div>
        {/* <!--end of info box--> */}

        <div className="intro-text">
          <p>
            {" "}
            This tasty chicken and aubergine curry has plenty of veg, protein,
            and fiber to keep you feeling good. I've started using kala chana
            (brown or black chickpeas) rather than normal chickpeas, they're
            smaller and heartier. You can buy them from Asda but they can be
            difficult to get hold of ready-soaked. If you can't get hold of
            tinned brown chickpeas, you can buy them dried and soak them over
            night.
          </p>
        </div>
        {/* <!--end into text--> */}

        <div className="mainImage-container">
          <Img
            className="main-image"
            src="../images/cropped-rustic-vegan-QY1956BJ8DE-unsplash.jpg"
            alt="finished dish"
          />
          {/* <p className="image-text">
            Chicken Thighs, Soft Aubergine, and Healthy Brown Chickpeas in a
            classNameic Indian Spiced Yoghurt Sauce
          </p> */}
        </div>
        {/* <!--end main image container--> */}
      </div>
      {/* <!--end blog-intro--> */}

      <div className="recipe-content">
        <div className="recipe-ingredients">
          <h2>
            <strong>Ingredients</strong>
          </h2>

          <ul>
            <li> 600g boneless chicken thighs </li>
            <li> 350g plain full fat yoghurt </li>
            <li>1 aubergine</li>
            <li>1 white onion</li>
            <li>1 tin of chana (brown chickpeas)</li>
            <li>1 small bunch of corriander</li>
            <li>1 tsp cumin powder</li>
            <li>1 tsp turmeric</li>
            <li>1 tsp chili powder</li>
            <li>1 tsp garam massala</li>
            <li>1 thumb sized piece of ginger</li>
            <li>4 cloves of garlic</li>
            <li>2 tbsp of oil</li>
            <li>half a tin of tomatoes</li>
            <li>2-3 chilies (depending on spice level)</li>
          </ul>
        </div>
        {/* <!--end recipe ingredients--> */}

        <div className="recipe-method">
          <h2>
            <strong>Method</strong>{" "}
          </h2>

          <ol>
            <li>
              The first step is to{" "}
              <b>prepare the ingredients for the chicken marinade. </b>
              Measure the spices, chop the meat, garlic, and ginger. I use
              chicken thigh rather than breast because it's cheaper and the
              extra fat gives the dish more flavour
            </li>

            <br />
            <li>
              <p>
                After you've prepared the ingredients, it's
                <b> time to marinade</b>. The chicken needs to be left to soak
                up the yoghurt and spices for <em>at least half an hour</em>,
                any longer is a bonus as the yoghurt tenderises chicken.{" "}
              </p>

              <p>
                Place the chopped chicken thighs into a bowl, along with the dry
                spices, garlic, and ginger. You can toast the dry spices if you
                want, this can create a deeper flavour. Rub these ingredients
                into the chicken, before adding the yoghurt and mixing well.
                <b>Cover and place in the fridge for at least 30 minutes.</b>
              </p>
            </li>

            <br />

            <li>
              <p>
                While the chicken is marinading, you'll need to{" "}
                <b>start preparing the other ingredients</b>.
              </p>

              <p>
                Finely chop or slice the onion, chilies, and corriander stalks.
                Cut the aubergine into bite size chunks and drain the chana or
                chickpeas. <b>Set everything aside.</b>
              </p>
            </li>

            <br />

            <li>
              <p>
                <b>Remove the marinading chicken from the fridge.</b> Place
                around 2 tbsp of oil into a medium to large sized pan or wok of
                choice and bring to a medium heat.
              </p>

              <p>
                <b>Fry the onions</b> until they turn dark brown, without buring
                the edges. Browning the onions will give your curry a deeper and
                sweeter flavour. Next <b>add the corriander stalks</b>, fry for
                a moment, then add your aubergine, frying until soft or golden
                brown.
              </p>
            </li>

            <br />

            <li>
              <p>
                Now it's time to{" "}
                <b>add the marinaded chicken and yoghurt mixture.</b> Once
                added, cook on a medium heat with the onions and aubergine for
                around 10 minutes, or until much of the water from the yoghurt
                has evaporated. Then <b>add the tomatoes</b> and cook down for
                another 8 minutes on a medium heat.
              </p>

              <p id="bottom">
                Place a lid on the pan and <b>reduce to a very low heat.</b> I
                usually leave the curry until the sauce thinckens and the
                vegetables are soft. As long as the chicken is cooked through,
                overall cooking time is up to you.
              </p>
            </li>
          </ol>
        </div>
        {/* <!--end of recipe method--> */}
      </div>
      {/* <!--end recipe content--> */}
    </article>
  </Layout>
)

export default LatestRecipes
