import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter, MemoryRouter} from "react-router-dom"
import { render, screen } from "@testing-library/react";
import routes from "../routes";



test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes)
  render(
    <RouterProvider router={router}/>
);
  expect(screen.getByText('/Home Page/')).toBeInTheDocument();
});

test('renders the Actors component on route "/actors"', () => {
    const router = createMemoryRouter(routes, {
        initialEntries: ['http://localhost:4000/actors']
    })
  render(
    <RouterProvider router={router}/>
);
  expect(screen.getByText('/Actors Page/')).toBeInTheDocument();
});

test('renders the Directors component on route "/directors"', () => {
    const router = createMemoryRouter(routes, {
        initialEntries: ['http://localhost:4000/directors']
    })
  render(
      <RouterProvider router={router}/>
  );
  expect(screen.queryByText('http://localhost:4000/Directors Page/')).toBeInTheDocument();
});

test('renders the Movie component on route "/movie/:id"', async () => {
    const id = 1
    const router = createMemoryRouter(routes, {
        initialEntries: [`http://localhost:4000/movie/${id}`]
    })
  render(
    <RouterProvider router={router}/>
);
  expect(await screen.findByText('http://localhost:4000/Doctor Strange/')).toBeInTheDocument();
});

test("renders an error page when given a bad URL", () =>{
  const router = createMemoryRouter(routes, {
      initialEntries: ["http://localhost:4000/bad-route"]
  })
  render(
      <RouterProvider router={router} />
  )
  expect(screen.getByText('/Oops! Looks like something went wrong./')).toBeInTheDocument()
})

