import React from 'react';
import { Form, Field } from 'react-final-form';

export const ProcessForm = ({}) => {
  const devMode = true;

  const onSubmit = React.useCallback(values => {
    window.alert(JSON.stringify(values, 0, 2));
  }, []);

  const initialValues = React.useMemo(
    () => ({
      infoPacketSent: false,
      lodgingBooked: false,
      dateArrivedUpdated: false,
      poBoxSet: false,
      needsCDC: false,
      needsDorm: false,
      inproCSS: false,
      inproBriefAttended: false,
    }),
    []
  );

  // @todo: add id's to inputs

  if (devMode) {
    return (
      <div>
        <Form onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit, values }) => (
            <div>
              <form onSubmit={handleSubmit} className='space-y-4'>
                {/* Info Packet */}
                <div
                  id='infoPacket'
                  className='flex items-center space-x-4 text-2xl'>
                  <Field name='infoPacketSent'>
                    {({ input, meta }) => (
                      <>
                        <input
                          {...input}
                          type='checkbox'
                          className='scale-150 accent-zinc-500'
                        />
                        <label htmlFor='infoPacketSent'>
                          Information Packet Sent
                        </label>
                      </>
                    )}
                  </Field>
                </div>
                {/* Lodging */}
                <div
                  id='lodging'
                  className='flex items-center space-x-4 text-2xl'>
                  <Field name='lodgingBooked'>
                    {({ input, meta }) => (
                      <>
                        <input
                          {...input}
                          type='checkbox'
                          className='scale-150 accent-zinc-500'
                        />
                        <label htmlFor='lodgingBooked'>Lodging booked</label>
                      </>
                    )}
                  </Field>
                  {values.lodgingBooked && (
                    <Field name='lodgingDetails'>
                      {({ input }) => (
                        <input
                          {...input}
                          type='text'
                          className='form__input-text'
                          placeholder={'lodging details'}
                        />
                      )}
                    </Field>
                  )}
                </div>
                {/* Updated DAS */}
                <div
                  id='date-arrived'
                  className='flex items-center space-x-4 text-2xl'>
                  <Field name='dateArrivedUpdated'>
                    {({ input }) => (
                      <>
                        <input
                          {...input}
                          type='checkbox'
                          className='scale-150 accent-zinc-500'
                        />
                        <label htmlFor='dateArrivedUpdated'>
                          Updated Arrival Date
                        </label>
                      </>
                    )}
                  </Field>
                </div>
                {/* PO Box Set Up */}
                <div
                  id='poBoxSet'
                  className='flex items-center space-x-4 text-2xl'>
                  <Field name='poBoxSet'>
                    {({ input, meta }) => (
                      <>
                        <input
                          {...input}
                          type='checkbox'
                          className='scale-150 accent-zinc-500'
                        />
                        <label htmlFor='poBoxSet'>PO Box Set Up</label>
                      </>
                    )}
                  </Field>
                  {values.poBoxSet && (
                    <Field name='poBox'>
                      {({ input }) => (
                        <input
                          {...input}
                          type='text'
                          className='form__input-text'
                          placeholder={'PO Box'}
                        />
                      )}
                    </Field>
                  )}
                </div>
                {/* In-processing brief */}
                <div
                  id='inprocessingBrief'
                  className='flex items-center space-x-4 text-2xl'>
                  <Field name='inproBriefAttended'>
                    {({ input }) => (
                      <>
                        <input
                          {...input}
                          type='checkbox'
                          className='scale-150 accent-zinc-500'
                        />
                        <label htmlFor='inproBriefAttended'>
                          In-processing Brief Attended
                        </label>
                      </>
                    )}
                  </Field>
                </div>
                {/* CSS Inprocess */}
                <div
                  id='inproCSS'
                  className='flex items-center space-x-4 text-2xl'>
                  <Field name='inproCSS'>
                    {({ input }) => (
                      <>
                        <input
                          {...input}
                          type='checkbox'
                          className='scale-150 accent-zinc-500'
                        />
                        <label htmlFor='inproCSS'>In-processed with CSS</label>
                      </>
                    )}
                  </Field>
                </div>
                {/* Dorm Room */}
                <div
                  id='needsDorm'
                  className='flex items-center space-x-4 text-2xl'>
                  <Field name='needsDorm'>
                    {({ input, meta }) => (
                      <>
                        <input
                          {...input}
                          type='checkbox'
                          className='scale-150 accent-zinc-500'
                        />
                        <label htmlFor='needsDorm'>Dorm Room Required</label>
                      </>
                    )}
                  </Field>
                  {values.needsDorm && (
                    <Field name='dormRoom'>
                      {({ input }) => (
                        <input
                          {...input}
                          type='text'
                          className='form__input-text'
                          placeholder={'Dorm room'}
                        />
                      )}
                    </Field>
                  )}
                </div>
                {/* Child care */}
                <div
                  id='needsCDC'
                  className='flex items-center space-x-4 text-2xl'>
                  <Field name='needsCDC'>
                    {({ input, meta }) => (
                      <>
                        <input
                          {...input}
                          type='checkbox'
                          className='scale-150 accent-zinc-500'
                        />
                        <label htmlFor='needsCDC'>Child Care Requested</label>
                      </>
                    )}
                  </Field>
                  {values.needsCDC && (
                    <Field name='cdcInfo'>
                      {({ input }) => (
                        <input
                          {...input}
                          type='text'
                          className='form__input-text'
                          placeholder={'CDC Info'}
                        />
                      )}
                    </Field>
                  )}
                </div>
                <button type='submit'>submit</button>
              </form>
              {/* <div className='rounded bg-zinc-200 p-2 shadow-inner'>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </div> */}
            </div>
          )}
        </Form>
      </div>
    );
  }

  return (
    <div className='hidden flex-col space-y-4 md:flex'>
      <div className='flex items-center space-x-4 text-2xl'>
        <input
          type='checkbox'
          name='infoPacket'
          id='infoPacket'
          className='scale-150 accent-zinc-500'
        />
        <label htmlFor='infoPacket' className='text-zinc-900'>
          Base information packet sent
        </label>
      </div>
      <div className='flex items-center space-x-4 text-2xl'>
        <input
          type='checkbox'
          name='infoPacket'
          id='infoPacket'
          className='scale-150 accent-zinc-500'
        />
        <label htmlFor='infoPacket' className='text-zinc-900'>
          Lodging booked
        </label>
        <input
          type='text'
          name='lodging'
          id='lodging'
          className='form__input-text'
          placeholder='Lodging details'
        />
      </div>
      <div className='flex items-center space-x-4 text-2xl'>
        <input
          type='checkbox'
          name='infoPacket'
          id='infoPacket'
          className='scale-150 accent-zinc-500'
        />
        <label htmlFor='infoPacket' className='text-zinc-900'>
          Updated date arrived on station
        </label>
      </div>
      <div className='flex items-center space-x-4 text-2xl'>
        <input
          type='checkbox'
          name='infoPacket'
          id='infoPacket'
          className='scale-150 accent-zinc-500'
        />
        <label htmlFor='infoPacket' className='text-zinc-900'>
          PO Box set up
        </label>
        <input
          type='text'
          name='lodging'
          id='lodging'
          className='form__input-text'
          placeholder='PO Box details'
        />
      </div>
      <div className='flex items-center space-x-4 text-2xl'>
        <input
          type='checkbox'
          name='infoPacket'
          id='infoPacket'
          className='scale-150 accent-zinc-500'
        />
        <label htmlFor='infoPacket' className='text-zinc-900'>
          Attended in-processing brief
        </label>
      </div>
      <div className='flex items-center space-x-4 text-2xl'>
        <input
          type='checkbox'
          name='infoPacket'
          id='infoPacket'
          className='scale-150 accent-zinc-500'
        />
        <label htmlFor='infoPacket' className='text-zinc-900'>
          In-processed with CSS
        </label>
      </div>
      <div className='flex items-center space-x-4 text-2xl'>
        <input
          type='checkbox'
          name='infoPacket'
          id='infoPacket'
          className='scale-150 accent-zinc-500'
        />
        <label htmlFor='infoPacket' className='text-zinc-900'>
          Dorm room required
        </label>
        <input
          type='text'
          name='lodging'
          id='lodging'
          className='form__input-text'
          placeholder='Assigned dorm room'
        />
      </div>
      <div className='flex items-center space-x-4 text-2xl'>
        <input
          type='checkbox'
          name='infoPacket'
          id='infoPacket'
          className='scale-150 accent-zinc-500'
        />
        <label htmlFor='infoPacket' className='text-zinc-900'>
          Child care requested
        </label>
        <input
          type='text'
          name='lodging'
          id='lodging'
          className='form__input-text'
          placeholder='Child care booking details'
        />
      </div>
    </div>
  );
};
