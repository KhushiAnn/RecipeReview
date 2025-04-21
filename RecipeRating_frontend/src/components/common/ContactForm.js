import useForm from '../hooks/useForm';
import InputField from '../components/common/InputField'; // Assuming this exists
import Button from '../components/common/Button';     // Assuming this exists

function ContactForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    { name: '', email: '', message: '' },
    async (formValues) => {
      console.log('Form submitted:', formValues);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Message sent!');
    }
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Name" id="name" type="text" value={values.name} onChange={handleChange} error={errors.name} required />
        <InputField label="Email" id="email" type="email" value={values.email} onChange={handleChange} error={errors.email} required />
        <InputField label="Message" id="message" value={values.message} onChange={handleChange} error={errors.message} required />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;