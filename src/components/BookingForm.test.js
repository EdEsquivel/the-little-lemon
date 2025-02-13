import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

// Mock the dispatch function
const mockDispatch = jest.fn();

test("Form can be submitted by the user", () => {
  const submitForm = jest.fn();

  render(
    <BookingForm
      submitForm={submitForm}
      dispatch={mockDispatch}
      availableTimes={{ availableTimes: ["17:00", "18:00", "19:00"] }}
    />
  );

  // Fill out the form fields
  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2023-10-15" },
  });
  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "18:00" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "4" },
  });

  // Submit the form
  fireEvent.click(screen.getByText("Book Now"));

  // Check if submitForm was called with the correct data
  expect(submitForm).toHaveBeenCalledWith({
    date: "2023-10-15",
    time: "18:00",
    guests: "4",
  });
});

test("Form cannot be submitted if required fields are missing", () => {
  const submitForm = jest.fn();

  render(
    <BookingForm
      submitForm={submitForm}
      dispatch={mockDispatch}
      availableTimes={{ availableTimes: ["17:00", "18:00", "19:00"] }}
    />
  );

  // Attempt to submit the form without filling out any fields
  fireEvent.click(screen.getByText("Book Now"));

  // Check that submitForm was not called
  expect(submitForm).not.toHaveBeenCalled();

  // Check that error messages are displayed for required fields
  expect(screen.getByLabelText(/choose date/i)).toBeInvalid();
  expect(screen.getByLabelText(/choose time/i)).toBeInvalid();
  expect(screen.getByLabelText(/number of guests/i)).toBeInvalid();
});

test("Time options are rendered correctly", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];

  render(
    <BookingForm
      submitForm={jest.fn()}
      dispatch={mockDispatch}
      availableTimes={{ availableTimes }}
    />
  );

  // Check that all time options are rendered
  availableTimes.forEach((time) => {
    expect(screen.getByText(time)).toBeInTheDocument();
  });
});

test("Component state updates correctly", () => {
  render(
    <BookingForm
      submitForm={jest.fn()}
      dispatch={mockDispatch}
      availableTimes={{ availableTimes: ["17:00", "18:00", "19:00"] }}
    />
  );

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2023-10-15" },
  });
  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "18:00" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "4" },
  });

  // Check that the state has been updated correctly
  expect(screen.getByLabelText(/choose date/i)).toHaveValue("2023-10-15");
  expect(screen.getByLabelText(/choose time/i)).toHaveValue("18:00");

  // Convert expected value to number before comparison
  expect(screen.getByLabelText(/number of guests/i)).toHaveValue(4);
});

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      submitForm={jest.fn()}
      dispatch={mockDispatch}
      availableTimes={{ availableTimes: ["17:00", "18:00", "19:00"] }}
    />
  );

  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
