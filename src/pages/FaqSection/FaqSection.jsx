import React from 'react';

const FaqSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-semibold text-center text-secondary">
        Most people are not aware of these things about event planning
        companies. Let’s explore all the FAQs one by one below.
      </h1>
      <div className="mt-5">
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            How can I find upcoming workshops or training sessions in my city?
          </div>
          <div className="collapse-content text-sm">
            You can search for workshops by selecting your city and filtering by
            category. Event Explorer shows detailed schedules, topics, and
            registration info for each listing.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Does Event Explorer list art exhibitions and cultural events?
          </div>
          <div className="collapse-content text-sm">
            Yes, Event Explorer features a wide range of events including art
            shows, exhibitions, and cultural festivals. You can explore them by
            category or through curated collections.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Can I register for conferences directly on Event Explorer?
          </div>
          <div className="collapse-content text-sm">
            Many events, including conferences, offer direct registration links
            through the platform. You’ll find event details, speaker info, and
            ticketing options all in one place.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do I get notified about local sports events?
          </div>
          <div className="collapse-content text-sm">
            You can enable notifications or subscribe to the "Sports" category
            for alerts. Event Explorer regularly updates local matches,
            tournaments, and community sports events.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Is it possible to filter events by type, like only educational or
            art-related events?
          </div>
          <div className="collapse-content text-sm">
            Yes, Event Explorer allows you to filter events by type such as
            educational, cultural, sports, or tech. This helps you quickly find
            the events that interest you most.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;