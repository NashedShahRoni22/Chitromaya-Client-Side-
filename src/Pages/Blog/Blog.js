import React from "react";
import image from "../../Images/chitromayaFAQ.png";

const Blog = () => {
  return (
    <section className="my-20 flex items-center">
      <div className="w-1/2">
        <img src={image} alt="" />
      </div>
      <div className="w-1/2">
        <div>
          {/* The button to open modal */}
          <label htmlFor="my-modal" className="glass py-2 px-4">
            Difference between SQL and NoSQL
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Difference between SQL and NoSQL
              </h3>
              <p className="py-4">
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL.
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal" className="glass px-4 py-2">
                  Ok!
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {/* The button to open modal */}
          <label htmlFor="my-modal2" className="glass py-2 px-4">
            What is JWT, and how does it work?
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal2" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                What is JWT, and how does it work?
              </h3>
              <p className="py-4">
                What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
                standard (RFC 7519) for securely transmitting information
                between parties as JSON object. It is compact, readable and
                digitally signed using a private key/ or a public key pair by
                the Identity Provider(IdP).
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal2" className="glass px-4 py-2">
                  Ok!
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {/* The button to open modal */}
          <label htmlFor="my-modal3" className="glass py-2 px-4">
            What is the difference between javascript and NodeJS?
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                What is the difference between javascript and NodeJS?
              </h3>
              <p className="py-4">
                JavaScript is a high-level programming language that makes our
                web pages and web applications dynamic and interactive by giving
                them the ability to think and act. JavaScript is a lightweight
                (easy to learn syntax) and object-oriented programming language
                whereas Node.js is a runtime environment built on google v8
                engine and typically used to represent a list of objects and
                functions that JavaScript programs can access.
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal3" className="glass px-4 py-2">
                  Ok!
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {/* The button to open modal */}
          <label htmlFor="my-modal4" className="glass py-2 px-4">
            How does NodeJS handle multiple requests at the same time?
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal4" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                How does NodeJS handle multiple requests at the same time?
              </h3>
              <p className="py-4">
                How NodeJS handle multiple client requests? NodeJS receives
                multiple client requests and places them into EventQueue. NodeJS
                is built with the concept of event-driven architecture. NodeJS
                has its own EventLoop which is an infinite loop that receives
                requests and processes them.
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal4" className="glass px-4 py-2">
                  Ok!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
