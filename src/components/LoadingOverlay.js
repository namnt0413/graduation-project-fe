import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

const LoadingOverlayComponent = ({ active, text }) => {
  return (
    <LoadingOverlay
      active={active}
      spinner
      text={text || 'Đang tải...'}
    >
      {/* Nội dung chính của bạn điều này sẽ được bọc trong LoadingOverlay */}
      <div style={{ minHeight: '200px', minWidth: '200px' }}>
        {/* Ví dụ: Thay thế với nội dung thực tế của bạn */}
        <h2>Nội dung</h2>
        <p>Đây là nội dung chính của bạn.</p>
      </div>
    </LoadingOverlay>
  );
};

export default LoadingOverlayComponent;
