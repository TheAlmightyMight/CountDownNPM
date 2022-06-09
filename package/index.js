export const countDownModule = (
  deps = { cDate, daysElement, hoursElement, minutesElement, secondsElements }
) => {
  const countDown = ({
    cDate: dep1,
    daysElement: dep2,
    hoursElement: dep3,
    minutesElement: dep4,
    secondsElement: dep5,
  } = deps) => {
    // Here you set the date from which the the script is going to count down from.

    const countDate = new Date(dep1).getTime();

    // Here we get the current date to subtract a difference between the date our count
    // down is set to and current user's time.

    const currentDate = new Date().getTime();

    // This is how the dates above are different from one another.

    let gap = countDate - currentDate;

    //This is how the time is being calculated when the start method is called.

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // These are values that are going to be displayed on the page.

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // This section is how we access the elements on a web-page.
    // Take into consideration that every dep(n) argument is a css class selector that is used
    // to reference an HTML-tag from the page.

    document.querySelector(String(dep2)).textContent = textDay;
    document.querySelector(String(dep3)).textContent = textHour;
    document.querySelector(String(dep4)).textContent = textMinute;
    document.querySelector(String(dep5)).textContent = textSecond;

    console.log("yes");
  };

  const state = {
    executing: true,
    stop: function () {
      return (this.executing = false);
    },
  };

  const start = setInterval(() => {
    state.executing ? countDown() : clearInterval(start);
  }, 1000);

  return state;
};
