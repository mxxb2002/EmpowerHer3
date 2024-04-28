import React from "react";
//import Img1 from "../../../public/assets/img-1.png";

export default function TopicTwo() {
  return (
    <div className="my-5 py-10 px-20 stm:px-5 lsm:px-1 stm:mx-3 lsm:mx-1 bg-yellow-200 font-quicksand text-left mx-16">
      <h1 className="text-center font-semibold text-[24px] mb-3 mx-10 stm:mx-4 lsm:mx-1">
        Empowering women in the workplace
      </h1>
      <p className="my-4">
        The gender gap at companies may be narrowing, but there’s still a lot of
        daylight. Now, we have data to back up what most women (and many men)
        know at an anecdotal level: according to PwC’s Global Workforce Hopes
        and Fears Survey 2022, men in the workplace are more empowered than
        women.
      </p>
      <p className="my-4">
        The survey was conducted in March and April 2022 and drew responses from
        more than 52,000 workers in 44 countries, making it one of the largest
        workforce surveys ever
      </p>
      <p className="my-4">
        As part of that survey, we wanted to know whether people felt
        empowered—or disempowered—at work. We looked at four well-understood
        dimensions of empowerment drawn from academic research: autonomy;
        performance/job impact; meaning and belonging; and
        confidence/competence. By surveying workers on these dimensions (through
        a total of 12 questions) and then calculating the degree to which the
        dimensions were both important to people and present in their work
        lives, we constructed a simple empowerment index, which we then used to
        evaluate different segments of the workforce. When we looked at the
        importance of the 12 factors in our index, the responses from men and
        women are highly similar—typically within a few percentage points of
        each other. For example, when asked about being fairly rewarded
        financially for their work, 71% of men and 72% of women said this was
        important. When asked about finding their job fulfilling, 68% of men and
        69% of women said it was important.
      </p>
      <p className="my-4">
        So far, so good. These findings debunk some of the outdated ideas that
        men and women have different expectations of their employers and
        careers. That should be reassuring to companies that want to create the
        right employee value proposition.
      </p>
      <p className="my-4">
        However, when asked about whether these factors were actually present in
        their current job environment, men and women showed a significant split.
        In all 12 of the empowerment metrics we looked at, men were more likely
        than women to say that those factors were present. As a result, the gap
        between importance and presence is bigger for women in every metric,
        meaning that women feel notably less empowered.
      </p>
      <p className="my-4">The biggest points of difference are:</p>
      <ul className="list-disc ">
        <li className="my-2">
          <p>
            Being fairly compensated financially at work (among women, there is
            a gap of 34 percentage points between the share of respondents who
            say this is important and the share who actually experience it).
          </p>
        </li>
        <li className="my-2">
          <p>
            Choosing when, where, and how to do one’s work (gaps of 27 points,
            22 points, and 22 points, respectively).
          </p>
        </li>
        <li className="my-2">
          <p> Finding one’s job fulfilling (20 points).</p>
        </li>
        <li className="my-2">
          <p>
            Having a manager consider one’s viewpoint when making decisions (19
            points).
          </p>
        </li>
      </ul>
      <div className="flex flex-row items-center justify-center">
        <img src={"/assets/img-1.png"} className=" w-[700px] h-[400px] " />
      </div>
      <h1 className="text-center font-semibold text-[24px] mx-10 mt-4 mb-[-10px]">
        Empowering women workers
      </h1>
      <p className="my-4">
        The good news is that companies don’t have to wonder what women want in
        the workplace. There’s no mystery about how to improve. Instead,
        companies can simply give them what they say is important. To get there,
        companies should:
      </p>
      <p className="my-4">
        {" "}
        <i className=" font-bold ">Listen and measure.</i> Companies need a
        data-driven approach to solving this problem. Gender is the one
        dimension of diversity that can be legally measured around the world.
        Measure the gender proportionality of performance ratings, promotions,
        and key talent populations, and use predictive analytics to understand
        which measures will have the biggest impact in addressing inequities. In
        addition to gathering this data, proactively survey employees to gauge
        the biggest issues, the biggest unmet needs, and the biggest potential
        areas of improvement. Segment by geographic location and business unit
        or function. Conduct these assessments regularly over time, to establish
        a baseline for comparison.
      </p>
      <p className="my-4">
        {" "}
        <i className="font-bold">Make pay schemes fair.</i> The key word
        regarding financial compensation is fairly—women aren’t insisting on
        making more money than men. The bigger factor in creating empowerment is
        a sense that pay schemes are fair, they reward merit, and they’re
        reasonably free from bias. The challenge for companies is particularly
        acute amid the current talent shortages, when people with critical
        experience can name their salary. Gather and report data about salaries,
        bonuses, and any other compensation, to increase transparency. Measure
        and correct any inequities in pay, communicate those changes, and ensure
        that your response to the great resignation doesn’t exacerbate
        gender-related pay gaps.
      </p>
    </div>
  );
}
