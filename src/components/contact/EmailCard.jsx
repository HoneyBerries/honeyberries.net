import PropTypes from 'prop-types';
import emailIcon from '../../assets/icons/email-icon.svg';

export default function EmailCard({ email }) {
  return (
    <div className="card-base card-hover p-6">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <img src={emailIcon} alt="Email icon" className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
          <a
            href={`mailto:${email}`}
            className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
          >
            {email}
          </a>
          <p className="text-sm text-gray-500 mt-2">Best for professional inquiries and detailed discussions</p>
        </div>
      </div>
    </div>
  );
}

EmailCard.propTypes = {
  email: PropTypes.string.isRequired
};
