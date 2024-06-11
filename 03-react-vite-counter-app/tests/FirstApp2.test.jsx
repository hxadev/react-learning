import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  const title = "Hola soy goku";
  const subtitle='Hello World';

  test("Debe de hacer match con snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola soy goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('Debe de mostrar el titulo en un H1', () => { 
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
  })

  test('Debe de mostrar el subtitulo enviado por props', () => { 
    render(<FirstApp title={title} subTitle={subtitle} />);
    expect(screen.getAllByText(subtitle)).toBeTruthy();
    expect(screen.getAllByText(subtitle).length).toBe(2);
   })
});
