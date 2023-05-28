import React from "react";
import style from "../NotFound/notFound.module.css"

const NotFound = () => {
  return (
    <div>
      <section class={["page_404",style.page].join(" ")}>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class={["col-sm-12 ","text-center",style.division].join(" ")}>
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>
                <div class="contant_box_404">
                  <h3 class="h2">YOU ARE LOST!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
