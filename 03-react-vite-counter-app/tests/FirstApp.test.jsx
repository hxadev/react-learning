import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  test("Debe de hacer match con el snapshot", () => {
    const title = "Hola soy goku";
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el titulo en un h1", () => {
    const title = "Hola soy goku";
    const { container, getByText } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();

    const h1=container.querySelector('h1');
    console.log(h1.innerHTML);
    expect(h1.innerHTML).toContain(title);
  });

  test('Debe mostrar el subtitulo enviado por props', () => { 
    const title = "Hola soy goku";
    const subTitle = "Soy el subtitulo";
    const { getAllByText } = render(<FirstApp title={title} subTitle={subTitle} />);
    expect(getAllByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2)
   })
});
