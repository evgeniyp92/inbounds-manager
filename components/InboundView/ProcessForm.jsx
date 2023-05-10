import React from 'react';
import { Form, Field, FormSpy } from 'react-final-form';

export const ProcessForm = ({ inprocessingState, setFormState }) => {
  const onSubmit = React.useCallback(values => {
    const previousValues = { ...values['0'] };
    let valuesToFix = { ...values };
    delete valuesToFix['0'];
    const valuesToSubmit = { ...previousValues, ...valuesToFix };
    window.alert(JSON.stringify(valuesToSubmit, 0, 2));
  }, []);

  return (
    <div id='react-final-form'>
      <Form onSubmit={onSubmit} initialValues={inprocessingState}>
        {({ handleSubmit, values, pristine }) => (
          <div>
            <FormSpy
              onChange={props => {
                if (props.dirty) {
                  setFormState(props.values);
                }
              }}
            />
            <form onSubmit={handleSubmit} className='space-y-4'>
              {/* Info Packet */}
              <div
                id='infoPacket'
                className='flex items-center space-x-4 text-2xl'>
                <Field name='infoPacketSent' type='checkbox'>
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
                <Field name='lodgingBooked' type='checkbox'>
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
                  <Field name='lodgingDetails' type='text'>
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
                <Field name='dateArrivedUpdated' type='checkbox'>
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
                <Field name='poBoxSet' type='checkbox'>
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
                  <Field name='poBox' type='text'>
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
                <Field name='inproBriefAttended' type='checkbox'>
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
                <Field name='inproCSS' type='checkbox'>
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
                <Field name='needsDorm' type='checkbox'>
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
                  <Field name='dormRoom' type='text'>
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
                <Field name='needsCDC' type='checkbox'>
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
                  <Field name='cdcInfo' type='text'>
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
            </form>
          </div>
        )}
      </Form>
    </div>
  );
};
