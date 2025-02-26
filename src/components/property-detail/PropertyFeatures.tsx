import { FaRegCircleCheck } from 'react-icons/fa6';

const features = [
  'Parks 4 cars',
  'Swimming Pool',
  'Indoor Gym',
  'Secured Estate',
  'Estate Sport Centre',
  '24 hours light',
  'Furnished Kitchen',
  'Water treatment facility',
  'Pre installed DSTV',
  'Air Conditioners Provided',
  '24 hours CCTV',
];

const PropertyFeatures = () => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Features & Highlights</h3>
      <div className="flex flex-wrap gap-4 text-gray-700">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-base font-normal"
          >
            <FaRegCircleCheck className="text-green-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyFeatures;
