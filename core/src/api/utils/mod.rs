use rspc::{Error, ErrorCode};

pub fn from_code(code: u16) -> ErrorCode {
    match code {
        400 => ErrorCode::BadRequest,
        401 => ErrorCode::Unauthorized,
        403 => ErrorCode::Forbidden,
        404 => ErrorCode::NotFound,
        408 => ErrorCode::Timeout,
        409 => ErrorCode::Conflict,
        412 => ErrorCode::PreconditionFailed,
        413 => ErrorCode::PayloadTooLarge,
        405 => ErrorCode::MethodNotSupported,
        499 => ErrorCode::ClientClosedRequest,
        500 => ErrorCode::InternalServerError,
        _ => ErrorCode::BadRequest,
    }
}

pub fn error(code: u16, message: &str) -> Result<(), Error> {
    Err(Error::new(from_code(code), message.into()))
}
