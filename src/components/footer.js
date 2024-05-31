import "./footer.css"

const Footer=()=>{
  return <>
          <div className="foot">

            <div className="top-foot">
                <div><h2>Zrippy</h2>
                    <p>Choose your favourite destination.</p>
                </div>

                <div className="icons">
                  <a href="/"><i class="fa-brands fa-square-facebook"></i></a>
                  <a href="/"><i class="fa-brands fa-square-instagram"></i></a>
                  <a href="/"><i class="fa-brands fa-square-twitter"></i></a>
                  <a href="/"><i class="fa-brands fa-behance-square"></i></a>
                </div>
            </div>

            <div className="bottom-foot">
                <div className="j">
                  <h2>Project</h2>
                  <p>Changelog</p>
                  <p>status</p>
                  <p>License</p>
                  <p>All versions</p>
                </div>
                <div className="j">
                  <h2>Community</h2>
                  <p>Github</p>
                  <p>Issues</p>
                  <p>Project</p>
                  <p>Twitter</p>
                </div>
                <div className="j">
                  <h2>Help</h2>
                  <p>Support</p>
                  <p>Troubleshooting</p>
                  <p>Contact Us</p>
                </div>
                <div className="j">
                  <h2>Others</h2>
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                  <p>License</p>
                </div>
            </div>

          </div>
        </>
}
export default Footer