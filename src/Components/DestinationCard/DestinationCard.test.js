import React from 'react';
import { render, waitFor } from '@testing-library/react';
import DestinationCard from './DestinationCard';
import { MemoryRouter } from 'react-router-dom';

test('true???', () => {
  expect(true).toEqual(true)
});

describe("DestinationCard", () => {
  let mockDestination;

  beforeEach(() => {
    mockDestination = [
      {
        "celestial_body_type": "Star",
        "gravity": 27.95,
        "id": 9,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkKZ8nFulIMZAK8MKI8kzvsfGnaa3YlqMMRA&usqp=CAU",
        "name": "Sun",
        "planet_day": 25.38,
        "planet_year": null
      }
    ]
  });

  it("Should render a destination card", async () => {
    const mockSelectDestination = jest.fn();

    const { getByText, getAllByText } = render(
      <MemoryRouter>
        <DestinationCard
          id={9}
          name={"Sun"}
          type={"Star"}
          image={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkKZ8nFulIMZAK8MKI8kzvsfGnaa3YlqMMRA&usqp=CAU"}
          selectDestination={ mockSelectDestination }
        />
      </MemoryRouter>
    );

    // images = component.find("img")
    const destinationName = await waitFor(() => getByText("Sun"));
    const button = await waitFor(() => getByText('Plan My Voyage!'));

    expect(destinationName).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
})