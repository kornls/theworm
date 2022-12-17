import Head from "next/head"
import { Formik, Field, Form } from "formik"
import { useState } from "react"
import * as yup from "yup"

import "@primer/css/base/index.scss"
import "@primer/css/index.scss"

const schema = yup.object().shape({
  size: yup.number().required().moreThan(9).lessThan(121),
  length: yup.number().required().moreThan(4).lessThan(16),
  color: yup.number().required().moreThan(-1).lessThan(361),
})

export default function Home() {
  const [wormShit, setWormShit] = useState({
    size: 50,
    length: 6,
    color: 200,
  })

  return (
    <div className="app">
      <Head>
        <title>The Worm - Wiggly Worm V2</title>
        <meta name="description" content="Just a worm." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="wrapper border">
        <h1 className="text-bold">
          Wiggly Worm<sup>v2</sup>
        </h1>
        <div>
          <h2 className="text-underline text-normal">
            What is this monstrosity?
          </h2>
          <p style={{ maxWidth: "25rem" }}>
            This <strong>thing </strong>
            is basically the second version of a stupid project I made like a
            year ago for fun. Yes, this is literally it. Btw, this thing has
            like 10 bugs lol sorry. Uhh... Have fun, I guess?
          </p>
        </div>
        <div>
          <h2 className="text-underline text-normal">Settings</h2>
          <Formik
            initialValues={{
              size: 50,
              length: 6,
              color: 200,
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              setWormShit({
                size: values.size,
                length: values.length,
                color: values.color,
              })
            }}
          >
            <Form>
              <div className="mb-2">
                <label htmlFor="size">
                  Worm Block Size{" "}
                  <span className="color-fg-danger small text-normal">
                    min: 10 max: 120
                  </span>
                </label>
                <Field
                  id="size"
                  name="size"
                  placeholder="20"
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="length">
                  Worm Length{" "}
                  <span className="color-fg-danger small text-normal">
                    min: 5 max: 15
                  </span>
                </label>
                <Field
                  id="length"
                  name="length"
                  placeholder="6"
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="color">
                  Worm Color in Degrees{" "}
                  <span className="color-fg-danger small text-normal">
                    min: 0 max: 360
                  </span>
                </label>
                <Field
                  id="color"
                  name="color"
                  placeholder="200"
                  type="number"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary mr-2">
                Apply Changes
              </button>
            </Form>
          </Formik>
        </div>
      </section>
      <main
        className="board"
        style={{ backgroundColor: `hsl(${wormShit.color}, 90%, 93%)` }}
      >
        <div className="worm">
          {[...Array(wormShit.length)].map((i, index) => {
            if (index != 0) {
              return (
                <div
                  className="worm__block"
                  key={i}
                  style={{
                    animationDelay: `${index * 200}ms, ${index * 100}ms`,
                    width: `${wormShit.size}px`,
                    height: `${wormShit.size}px`,
                    backgroundColor: `hsl(${wormShit.color}, 50%, ${
                      index * 2.7 + 40
                    }%)`,
                    borderRadius: `${wormShit.size / 7}px`,
                  }}
                ></div>
              )
            } else {
              return (
                <div
                  className="worm__block"
                  key={i}
                  style={{
                    animationDelay: `${index * 200}ms, ${index * 100}ms`,
                    width: `${wormShit.size}px`,
                    height: `${wormShit.size}px`,
                    backgroundColor: `hsl(${wormShit.color}, 50%, ${
                      index * 3 + 40
                    }%)`,
                    borderRadius: `${wormShit.size / 7}px`,
                    padding: `${wormShit.size / 10}px`,
                  }}
                >
                  <div
                    className="eyes"
                    style={{
                      height: `${wormShit.size / 2.5}px`,
                      width: `${wormShit.size / 7}px`,
                      borderRadius: "inherit",
                    }}
                  ></div>
                  <div
                    className="mouth"
                    style={{
                      height: `${wormShit.size / 20}px`,
                      width: `${wormShit.size / 2}px`,
                      borderRadius: "inherit",
                      marginTop: `${wormShit.size / 5}px`,
                      marginLeft: `${(wormShit.size / 10) * -1}px`,
                    }}
                  ></div>
                </div>
              )
            }
          })}
        </div>
      </main>
    </div>
  )
}
