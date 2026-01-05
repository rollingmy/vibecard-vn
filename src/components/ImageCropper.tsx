import React, { useState, useCallback } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import getCroppedImg from '@/utils/cropImage';
import { ZoomIn, ZoomOut, Check, X } from 'lucide-react';

interface ImageCropperProps {
    imageSrc: string;
    onCropComplete: (croppedImage: string) => void;
    onCancel: () => void;
}

export default function ImageCropper({ imageSrc, onCropComplete, onCancel }: ImageCropperProps) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const onCropChange = (crop: { x: number; y: number }) => {
        setCrop(crop);
    };

    const onZoomChange = (zoom: number) => {
        setZoom(zoom);
    };

    const onCropAreaChange = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleSave = async () => {
        if (!croppedAreaPixels) return;
        setIsProcessing(true);
        try {
            const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
            onCropComplete(croppedImage);
        } catch (e) {
            console.error(e);
            alert('Có lỗi xảy ra khi cắt ảnh!');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-lg bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,0.5)] flex flex-col h-[80vh] md:h-[600px]">

                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b-4 border-black bg-yellow-400">
                    <h3 className="font-black uppercase text-xl">Cắt ảnh Avatar</h3>
                    <button onClick={onCancel} className="p-1 hover:bg-black hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Cropper Area */}
                <div className="relative flex-1 bg-gray-100 overflow-hidden">
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        onCropChange={onCropChange}
                        onCropComplete={onCropAreaChange}
                        onZoomChange={onZoomChange}
                        classes={{
                            containerClassName: "bg-gray-800",
                        }}
                    />
                </div>

                {/* Controls */}
                <div className="p-6 border-t-4 border-black flex flex-col gap-4 bg-white">
                    <div className="flex items-center gap-4">
                        <ZoomOut size={20} />
                        <input
                            type="range"
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e) => setZoom(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer border-2 border-black accent-black"
                        />
                        <ZoomIn size={20} />
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={onCancel}
                            className="flex-1 py-3 px-4 font-bold border-4 border-black uppercase hover:bg-gray-200 transition-colors"
                        >
                            Hủy
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={isProcessing}
                            className="flex-1 py-3 px-4 bg-black text-white font-bold border-4 border-black uppercase hover:bg-gray-800 disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isProcessing ? 'Đang xử lý...' : (
                                <>
                                    <Check size={20} /> Xong
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
