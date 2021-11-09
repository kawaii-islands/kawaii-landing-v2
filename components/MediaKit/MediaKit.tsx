import React from "react";
import cn from "classnames/bind";
import styles from "./MediaKit.module.scss";
import Item from "./Item";

const cx = cn.bind(styles);

const MediaKit: React.FC<{}> = ({ }) => {

  return (
    <div className={cx("media-kit")}>
      <div className={cx("container")}>
        <div className={cx("top")}>
          <div className={cx("header1")}>Kawaii Media Kit</div>
          <div className={cx("text")}>
            Feel free to download and use the logo assets below. Please do not
            modify or change the resources below. Be sure to abide by the usage
            rules noted under each asset.
          </div>
        </div>
        <div className={cx("logo-library")}>
          <div className={cx("header2")}>Kawaii Islands Logo library</div>
          <div className={cx("list-logo")}>
            {/* card1 */}
            <div className={cx("card")}>
              <div className={cx("card-top")}>
                <div>Kawaii islands logo</div>
                <div className={cx("img-icon")}>
                  {/* <Tooltip title="Copy image to clipboard" placement="top"> */}
                  <img
                    src={"/images/icons/image.svg"}
                    alt="Kawaii islands logo"
                  />
                  {/* </Tooltip> */}
                </div>
              </div>
              <div className={cx("card-body")}>
                <img src={"/images/images/kawaii-islands.png"} alt="kawaii-logo" width={180} />
              </div>
              <div className={cx("card-bottom")}>
                {/* <p>
                  Please use this logo in most circumstances on backgrounds.
                </p> */}
                <div className={cx("group-button")}>
                  <div className={cx("btn")}>
                    <a href={"/images/images/kawaii-islands.png"} download>
                      PNG <img src={"/images/icons/download.svg"} alt="download" />
                    </a>
                  </div>
                  <div className={cx("btn")}>
                    <a href={"/images/images/kawaii-islands.svg"} download>
                      SVG <img src={"/images/icons/download.svg"} alt="download" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className={cx("card")}>
              <div className={cx("card-top")}>
                <div>KWT token logo</div>
                <div className={cx("img-icon")}>
                  {/* <Tooltip title="Copy image to clipboard" placement="top"> */}
                  <img src={"/images/icons/image.svg"} alt="Kawaii islands logo" />
                  {/* </Tooltip> */}
                </div>
              </div>
              <div className={cx("card-body")}>
                <img src={"/images/images/KWTtoken.png"} alt="kawaii-logo" width={118} />
              </div>
              <div className={cx("card-bottom")}>
                {/* <p>
                  Please use this logo in most circumstances on backgrounds.
                </p> */}
                <div className={cx("group-button")}>
                  <div className={cx("btn")}>
                    <a href={"/images/images/KWTtoken.png"} download>
                      PNG <img src={"/images/icons/download.svg"} alt="download" />
                    </a>
                  </div>
                  <div className={cx("btn")}>
                    <a href={"/images/images/KWTtoken.svg"} download>
                      SVG <img src={"/images/icons/download.svg"} alt="download" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className={cx("card")}>
              <div className={cx("card-top")}>
                <div>MILKY token logo</div>
                <div className={cx("img-icon")}>
                  {/* <Tooltip title="Copy image to clipboard" placement="top"> */}
                  <img src={"/images/icons/image.svg"} alt="Kawaii islands logo" />
                  {/* </Tooltip> */}
                </div>
              </div>
              <div className={cx("card-body")}>
                <img src={"/images/images/milky-token.png"} alt="kawaii-logo" width={112} />
              </div>
              <div className={cx("card-bottom")}>
                {/* <p>
                  Please use this logo in most circumstances on backgrounds.
                </p> */}
                <div className={cx("group-button")}>
                  <div className={cx("btn")}>
                    <a href={"/images/images/milky-token.png"} download>
                      PNG <img src={"/images/icons/download.svg"} alt="download" />
                    </a>
                  </div>
                  <div className={cx("btn")}>
                    <a href={"/images/images/milky-token.svg"} download>
                      SVG <img src={"/images/icons/download.svg"} alt="download" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("color-library")}>
          <div className={cx("header2")}>Colors</div>
          <div className={cx("text")}>
            All of the primary, secondary and neutral colors are global SCSS variables.
            Use the token to define colors in the UI.
          </div>

          <div className={cx("row")}>
            <div className={cx("header3")}>Primary colors</div>
            <div className={cx("list-item")}>
              <Item title="Primary color" hexColor="#944850" rgbColor="rgb(148, 72, 80)" isLinear={false} />
              <Item title="Primary text" hexColor="#833F1D" rgbColor="rgb(131, 63, 29)" isLinear={false}/>
              <Item title="Primary color" hexColor="#F25858" rgbColor="rgb(242, 88, 88)" isLinear={false}/>
            </div>
          </div>

          <div className={cx("row")}>
            <div className={cx("header3")}>Secondary colors</div>
            <div className={cx("list-item")}>
              <Item title="Secondary text 1" hexColor="#CB8B91" rgbColor="rgb(203, 139, 145)" isLinear={false}/>
              <Item title="Secondary text 2" hexColor="#A86C60" rgbColor="rgb(168, 108, 96)" isLinear={false}/>
              <Item title="Secondary button" hexColor="#F59D51" rgbColor="rgb(245, 157, 81)" isLinear={false}/>
            </div>
          </div>

          <div className={cx("row")}>
            <div className={cx("header3")}>Neutrals</div>
            <div className={cx("list-item")}>
              <Item title="Background" hexColor="#FDECD9" rgbColor="rgb(253, 236, 217)" isLinear={false}/>
              <Item title="Background card" hexColor="#FDF5E8, #FDE7CF" rgbColor="rgb(253, 245, 232)" isLinear={true}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MediaKit;
