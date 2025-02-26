import { Property } from '@/types/property';

interface PropertyMapProps {
  propertyDetail: Property;
}

const PropertyMap = ({ propertyDetail }: PropertyMapProps) => {
  return (
    <div className="mt-6 mb-8">
      <h3 className="text-[20px] font-semibold mb-2">Map</h3>

      <div className="w-full h-60 rounded-lg overflow-hidden">
        <iframe
          title="Property Location"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126911.30894253696!2d3.3779448476438693!3d6.469812680488692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf51879f5f7cb%3A0x6f5b3d7f8d839e49!2sLekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1708952144879!5m2!1sen!2sng"
        ></iframe>
      </div>

      <h3 className="text-[20px] font-semibold mb-2 mt-6">Description</h3>
      <p className="font-normal text-sm">
        {propertyDetail?.asset?.description}
      </p>
    </div>
  );
};

export default PropertyMap;
